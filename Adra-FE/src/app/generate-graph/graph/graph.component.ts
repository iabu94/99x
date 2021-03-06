import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChartType } from 'angular-google-charts';
import { Subscription } from 'rxjs';
import { GraphService } from 'src/app/services';
import { Month } from '../../enums/month';
import { last, monthsByYear, unique } from '../../helpers';
import { Report, YearMonth } from '../../models';

@Component({
  selector: 'adra-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnDestroy {
  title = ``;
  type = ChartType.LineChart;
  options = {
    hAxis: {
      title: 'Month'
    },
    vAxis: {
      title: 'Amount'
    },
  };
  width = 800;
  height = 500;

  yearMonths: YearMonth[] = [];
  month = Month;
  reports: Report[] = [];
  data: any[] = [];
  columnNames: string[] = [];

  fromYears: number[] = [];
  fromMonths: number[] = [];
  toYears: number[] = [];
  toMonths: number[] = [];

  graphForm: FormGroup;

  subscription = new Subscription();

  constructor(private graphService: GraphService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.graphForm = this.initializeForm();
    this.yearMonths = this.route.snapshot.data['yearMonths'];
    this.setupFormControlValues();
    this.filterMonthsByYears();
    this.fetchGraphData();
  }

  initializeForm(): FormGroup {
    return this.fb.group({
      yearStart: new FormControl(),
      monthStart: new FormControl(),
      yearEnd: new FormControl(),
      monthEnd: new FormControl(),
    });
  }

  fetchGraphData() {
    const sub = this.graphService.getGraphData(this.graphForm.value).subscribe(reports => {
      this.reports = reports;
      this.generateGraphData();
    });
    this.subscription.add(sub);
  }

  generateGraphData() {
    this.data = [];
    this.reports.forEach(report => {
      const arr = [`${report.year} ${this.month[report.month]}`, ...report.balances.map(b => b.amount)];
      this.data.push(arr);
    });
    this.columnNames = ["Month", ...this.reports[0].balances.map(b => b.accountName)];
    this.title = `Balance Change Over ${this.month[this.f['monthStart'].value]} ${this.f['yearStart'].value} - ` +
      `${this.month[this.f['monthEnd'].value]} ${this.f['yearEnd'].value}`
  }

  get f() {
    return this.graphForm.controls;
  }

  setupFormControlValues() {
    this.fromYears = unique(this.yearMonths.map(x => x.year));
    this.f['yearStart'].patchValue(last(this.fromYears));
    this.setMonthStart(last(this.fromYears));

    this.toYears = unique(this.yearMonths.map(x => x.year));
    this.f['yearEnd'].patchValue(last(this.toYears));
    this.setMonthEnd(last(this.toYears));
  }

  filterMonthsByYears() {
    this.f['yearStart'].valueChanges.subscribe(year => {
      this.setMonthStart(year);
    });

    this.f['yearEnd'].valueChanges.subscribe(year => {
      this.setMonthEnd(year);
    });
  }

  setMonthStart(year: number) {
    this.fromMonths = monthsByYear(this.yearMonths, year);
    this.f['monthStart'].patchValue(this.fromMonths[0]);
  }
  setMonthEnd(year: number) {
    this.toMonths = monthsByYear(this.yearMonths, year);
    this.f['monthEnd'].patchValue(this.toMonths[0]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
