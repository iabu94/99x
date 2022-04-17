import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YearsResolver } from '../services';
import { BalanceViewerComponent } from './balance-viewer.component';

const routes: Routes = [
  {
    path: '',
    resolve: {
      yearMonths: YearsResolver
    },
    component: BalanceViewerComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceViewerRoutingModule { }
