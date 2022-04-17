import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BalanceViewerRoutingModule } from './balance-viewer-routing.module';
import { BalanceViewerComponent } from './balance-viewer.component';
import { ViewBalanceComponent } from './view-balance/view-balance.component';

@NgModule({
  declarations: [
    BalanceViewerComponent,
    ViewBalanceComponent
  ],
  imports: [
    CommonModule,
    BalanceViewerRoutingModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class BalanceViewerModule { }
