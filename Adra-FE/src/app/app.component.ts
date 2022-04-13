import { Component } from '@angular/core';
import { Month } from './enums/month';
import { TestService } from './test.service';

@Component({
  selector: 'adra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Adra-FE';
  months = Month;
  keys: number[] = [];

  constructor(private testService: TestService) {
    this.keys = Object.keys(this.months).filter(k => !isNaN(Number(k))).map(Number);
    testService.getWeather().subscribe(console.log);
  }
}
