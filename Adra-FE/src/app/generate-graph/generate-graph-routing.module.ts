import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YearsResolver } from '../services';
import { GenerateGraphComponent } from './generate-graph.component';

const routes: Routes = [
  {
    path: '',
    resolve: {
      yearMonths: YearsResolver
    },
    component: GenerateGraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateGraphRoutingModule { }
