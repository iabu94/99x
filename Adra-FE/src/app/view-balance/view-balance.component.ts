import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Month } from '../enums/month';
import { monthsByYear, unique } from '../helpers';
import { Report, YearMonth } from '../models';
import { TestService } from '../test.service';

@Component({
  selector: 'adra-view-balance',
  templateUrl: './view-balance.component.html',
  styleUrls: ['./view-balance.component.scss']
})
export class ViewBalanceComponent {
  yearMonths: YearMonth[] = [];
  years: number[] = [];
  months: number[] = [];
  monthList = Month;

  report!: Report;

  yearMonthForm: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private svc: TestService) {

    this.yearMonths = this.route.snapshot.data['yearMonths'];
    this.years = unique(this.yearMonths.map(x => x.year));
    this.months = monthsByYear(this.yearMonths, this.years[this.years.length - 1]);

    this.yearMonthForm = this.fb.group({
      year: new FormControl(this.years[this.years.length - 1], Validators.required),
      month: new FormControl(this.months[this.months.length - 1], Validators.required)
    });

    this.f['year'].valueChanges.subscribe(year => {
      this.months = monthsByYear(this.yearMonths, year);
      this.f['month'].patchValue(this.months[this.months.length - 1]);
    });

    this.svc.getAccountBalances(this.yearMonthForm.value)
      .subscribe(data => this.report = data);
  }

  get f() {
    return this.yearMonthForm.controls;
  }

  viewBalance() {
    this.svc.getAccountBalances(this.yearMonthForm.value)
      .subscribe(data => this.report = data);
  }
}
