import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BalanceViewerRoutingModule } from './balance-viewer-routing.module';
import { BalanceViewerComponent } from './balance-viewer.component';
import { ViewBalanceComponent } from './view-balance/view-balance.component';

@NgModule({
  declarations: [
    BalanceViewerComponent,
    ViewBalanceComponent
  ],
  imports: [
    SharedModule,
    BalanceViewerRoutingModule
  ]
})
export class BalanceViewerModule { }
