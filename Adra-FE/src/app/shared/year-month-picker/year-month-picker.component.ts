import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Month } from 'src/app/enums';
import { YearMonth } from 'src/app/models';

@Component({
  selector: 'adra-year-month-picker',
  templateUrl: './year-month-picker.component.html',
  styleUrls: ['./year-month-picker.component.scss']
})
export class YearMonthPickerComponent {
  monthList = Month;

  @Input() years: number[] = [];
  @Input() months: number[] = [];

  private _yearMonth!: YearMonth;
  @Input() set selectedYearMonth(value: YearMonth) {
    this._yearMonth = value;
    this.f['year'].patchValue(value.year);
    this.f['month'].patchValue(value.month);
  }
  get selectedYearMonth() {
    return this._yearMonth;
  }

  yearMonthForm: FormGroup;

  @Output() yearMonth = new EventEmitter<YearMonth>();

  constructor(private fb: FormBuilder) {
    this.yearMonthForm = this.fb.group({
      year: new FormControl(this.selectedYearMonth?.year, Validators.required),
      month: new FormControl(this.selectedYearMonth?.month, Validators.required)
    });
    this.yearMonthForm.valueChanges.subscribe(yearMonth => this.yearMonth.emit(yearMonth));
  }

  get f() {
    return this.yearMonthForm.controls;
  }
}
