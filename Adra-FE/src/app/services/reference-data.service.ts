import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { handleError } from './error-handler';

@Injectable({
  providedIn: 'root'
})
export class ReferenceDataService {

  private url = `${environment.apiUrl}/ReferenceData`;

  constructor(private http: HttpClient) { }

  getYears() {
    return this.http.get(`${this.url}/YearMonths`).pipe(
      catchError(handleError)
    );
  }
}
