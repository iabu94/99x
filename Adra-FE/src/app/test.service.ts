import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  url = 'https://localhost:5001/';
  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get(`${this.url}WeatherForecast`);
  }

  upload(formValue: any) {
    if (formValue.file.length === 0) {
      return;
    }

    const formData = new FormData();

    formData.append('file', formValue.file);
    formData.append('year', formValue.year);
    formData.append('month', formValue.month);

    const uploadReq = new HttpRequest('POST', `${this.url}Report/Upload`, formData, {
      reportProgress: true,
    });

    return this.http.request(uploadReq);
  }
}
