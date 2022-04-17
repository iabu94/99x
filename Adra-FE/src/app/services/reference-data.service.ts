import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferenceDataService {

  private url = 'https://localhost:5001/api/ReferenceData'

  constructor(private http: HttpClient) { }

  getYears() {
    return this.http.get(`${this.url}/YearMonths`);
  }
}
