import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Month } from '../../enums/month';
import { last, monthsByYear, todayYearMonth, unique } from '../../helpers';
import { Report, YearMonth } from '../../models';
import { ReportService } from '../../services';

@Component({
  selector: 'adra-view-balance',
  templateUrl: './view-balance.component.html',
  styleUrls: ['./view-balance.component.scss']
})
export class ViewBalanceComponent implements OnDestroy {
  yearMonths: YearMonth[] = [];
  years: number[] = [];
  months: number[] = [];
  selectedYearMonth: YearMonth = todayYearMonth();
  monthList = Month;

  report!: Report;
  subscription = new Subscription();

  constructor(private route: ActivatedRoute, private reportService: ReportService) {

    this.yearMonths = this.route.snapshot.data['yearMonths'];
    this.years = unique(this.yearMonths.map(x => x.year));
    this.months = monthsByYear(this.yearMonths, this.years[this.years.length - 1]);
    this.selectedYearMonth = { year: last(this.years), month: last(this.months) };

    this.getAcBalance();
  }

  yearMonthChanged(yearMonth: YearMonth) {
    this.selectedYearMonth = yearMonth;
    this.months = monthsByYear(this.yearMonths, yearMonth.year);
  }

  getAcBalance() {
    const sub = this.reportService.getAccountBalances(this.selectedYearMonth)
      .subscribe(data => this.report = data);
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
