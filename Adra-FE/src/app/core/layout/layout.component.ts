import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'adra-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  user$: Observable<User>;

  constructor(private authService: AuthService, private router: Router) {
    this.user$ = this.authService.userSubject.asObservable();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
