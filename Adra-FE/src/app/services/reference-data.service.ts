import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { handleError } from './error-handler';

@Injectable({
  providedIn: 'root'
})
export class ReferenceDataService {

  private url = 'https://localhost:5001/api/ReferenceData'

  constructor(private http: HttpClient) { }

  getYears() {
    return this.http.get(`${this.url}/YearMonths`).pipe(
      catchError(handleError)
    );
  }
}
