import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report } from './models';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  url = 'https://localhost:5001';
  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get(`${this.url}/WeatherForecast`);
  }

  upload(formValue: any) {
    if (formValue.file.length === 0) {
      return;
    }
    const formData = new FormData();
    formData.append('file', formValue.file);
    formData.append('year', formValue.year);
    formData.append('month', formValue.month);
    const uploadReq = new HttpRequest('POST', `${this.url}/Report/Upload`, formData, {
      reportProgress: true,
    });
    return this.http.request(uploadReq);
  }

  update(formValue: any) {
    if (formValue.file.length === 0) {
      return;
    }
    const formData = new FormData();
    formData.append('file', formValue.file);
    formData.append('year', formValue.year);
    formData.append('month', formValue.month);
    const uploadReq = new HttpRequest('POST', `${this.url}/Report/Update`, formData, {
      reportProgress: true,
    });
    return this.http.request(uploadReq);
  }

  getYears() {
    return this.http.get(`${this.url}/ReferenceData/YearMonths`);
  }

  getAccountBalances(formValue: any) {
    return this.http.get<Report>(`${this.url}/Report/${formValue.year}/${formValue.month}`);
  }

  checkReportExists(formValue: any) {
    return this.http.get<boolean>(`${this.url}/Report/Exists/${formValue.year}/${formValue.month}`);
  }

  getGraphData({ yearStart, monthStart, yearEnd, monthEnd }: any) {
    const body = { yearStart, monthStart, yearEnd, monthEnd };
    return this.http.post<Report[]>(`${this.url}/Report/Graph`, body);
  }
}
