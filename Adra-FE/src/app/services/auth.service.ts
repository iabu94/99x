import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserLogin } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = `${environment.apiUrl}/Auth`;
  userSubject = new BehaviorSubject<User>({} as User);

  constructor(private http: HttpClient) {
    this.setUserInfo();
  }

  login(user: UserLogin) {
    return this.http.post<any>(`${this.url}/Login`, user);
  }

  setUserInfo() {
    const token = localStorage.getItem('token') as string;
    const user = !!token ? JSON.parse(atob(token.split('.')[1])) as User : {} as User;
    this.userSubject.next(user);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
