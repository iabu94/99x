import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TestService } from '../test.service';

@Injectable({
  providedIn: 'root'
})
export class YearsResolver implements Resolve<any> {
  constructor(private svc: TestService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.svc.getYears();
  }
}
