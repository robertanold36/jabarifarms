import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { LoginRequestPayload } from './login.request.payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loginRequestPayload!: LoginRequestPayload;
  registerSuccessMessage!: string;
  isError!: boolean;
  isLoading=false

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });


  }

  get f() {
    return this.loginForm.controls;
  }

  login() {

    this.loginRequestPayload.username = this.loginForm.get('username')?.value;
    this.loginRequestPayload.password = this.loginForm.get('password')?.value;

    if (this.f['username'].invalid||this.f['password'].invalid) {
      this.toastr.error("Please fill the fields")
    
    } else {
      this.isLoading=true
      this.authService.login(this.loginRequestPayload).subscribe(data => {
        if (data) {
          this.isLoading=false
          this.isError = false;
          this.router.navigateByUrl('/');
          this.toastr.success('login succesfully');
        }
      }, err => {
        this.isLoading=false
        if (err.status==404 || err.status==403) {
          this.isError = true;
          this.toastr.error('Username or password is incorrect');
        } else {
          this.isError = true;
          this.toastr.error('Internal server error');
        }
       
      });
    }

  }

}
