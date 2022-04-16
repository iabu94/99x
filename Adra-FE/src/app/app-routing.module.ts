import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { YearsResolver } from './services/years.resolver';
import { UploadComponent } from './upload/upload.component';
import { ViewBalanceComponent } from './view-balance/view-balance.component';

const routes: Routes = [
  {
    path: '',
    component: UploadComponent
  },
  {
    path: 'view-balance',
    resolve: {
      yearMonths: YearsResolver
    },
    component: ViewBalanceComponent
  },
  {
    path: 'report',
    resolve: {
      yearMonths: YearsResolver
    },
    component: ReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
