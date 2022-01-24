import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginResponse } from '../login/login-response.payload';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  isTokenRefreshing = false;

  constructor(private authService: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    if ((req.url.indexOf('refresh') !== -1) || req.url.indexOf('login') !== -1) {
      return next.handle(req);
    }
    const jwtToken = this.authService.getJwtToken();

    if (jwtToken) {
      return next.handle(this.addToken(req, jwtToken)).pipe(catchError(error => {
        if (error.status === 403) {
          return this.handleAuthErrors(req, next);
        } else {
          return throwError(error);
        }
      }));
    }

    return next.handle(req);

  }

  private addToken(req: HttpRequest<any>, jwtToken: String) {
    return req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + jwtToken)
    });
  }
  private handleAuthErrors(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!this.isTokenRefreshing) {
      this.isTokenRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((refreshTokenResponse: LoginResponse) => {
          this.isTokenRefreshing = false;
          this.refreshTokenSubject
            .next(refreshTokenResponse.token);
          return next.handle(this.addToken(req,
            refreshTokenResponse.token));
        })
      )
    } else {
      return this.refreshTokenSubject.pipe(
        filter(result => result !== null),
        take(1),
        switchMap((res) => {
          return next.handle(this.addToken(req,
            this.authService.getJwtToken()))
        })
      );
    }

  }
}
