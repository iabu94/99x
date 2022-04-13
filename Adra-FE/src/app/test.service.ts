import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url = 'https://localhost:5001/'
  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get(`${this.url}WeatherForecast`)
  }
}
