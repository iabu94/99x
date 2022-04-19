import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRole } from '../constants/user-role';
import { AuthService } from '../services';

@Component({
  selector: 'adra-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isAuthenticated = false;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.loginForm.value)
      .subscribe(data => {
        localStorage.setItem('token', data.token);
        this.authService.setUserInfo();
        this.authService.userSubject.value.role === UserRole.ADMIN ?
          this.router.navigate(['/dashboard/upload-file']) : this.router.navigate(['/dashboard/balance-viewer'])
      });
  }
}
