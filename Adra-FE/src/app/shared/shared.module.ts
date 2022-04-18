import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { YearMonthPickerComponent } from './year-month-picker/year-month-picker.component';

@NgModule({
  declarations: [
    YearMonthPickerComponent
  ],
  imports: [
    // vendor
    ReactiveFormsModule,
    CommonModule,

    // material
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    // vendor
    CommonModule,
    ReactiveFormsModule,

    // material modules
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,

    // components
    YearMonthPickerComponent
  ]
})
export class SharedModule { }
