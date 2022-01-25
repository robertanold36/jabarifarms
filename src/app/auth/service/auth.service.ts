import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { map, Observable, tap } from 'rxjs';
import { LoginResponse } from '../login/login-response.payload';
import { LoginRequestPayload } from '../login/login.request.payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<String> = new EventEmitter();

  url:String="http://localhost:8080/jabari/auth"

  constructor(private http: HttpClient,
    private localStorage: LocalStorageService) { }

  login(loginRequest: LoginRequestPayload): Observable<boolean> {
    return this.http.post<LoginResponse>(this.url+'/login', loginRequest).pipe(map(data => {
      this.localStorage.store('authenticationToken', data.token);
      this.localStorage.store('expiresAt', data.expiresAt);
      this.localStorage.store('refreshToken', data.refreshToken);
      this.localStorage.store('username', data.username);

      this.loggedIn.emit(true);
      this.username.emit(data.username);

      return true;
    }));
  }

  refreshToken() {

    const refreshTokenPayload = {
      refreshToken: this.getRefreshToken(),
      username: this.getUserName()

    };

    return this.http.post<LoginResponse>(this.url+'/refresh/token'
      , refreshTokenPayload).pipe(tap(response => {
        console.log(response)
        this.localStorage.store('authenticationToken', response.token);
        this.localStorage.store('expiresAt', response.expiresAt);
      }))
  }

  sessionAutoLogout(): Boolean {
    const dateNumber = new Date().getTime()
    const jwtExpirationDateNumber = (this.getExpirationTime() * 1000)
    if (dateNumber > jwtExpirationDateNumber) {

      this.localStorage.clear()
      return true
    } else {
      return false
    }


  }

  getJwtToken() {
    return this.localStorage.retrieve('authenticationToken');
  }

  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }

  getUserName() {
    return this.localStorage.retrieve('username');
  }

  getExpirationTime() {
    return this.localStorage.retrieve('expiresAt');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }

}
