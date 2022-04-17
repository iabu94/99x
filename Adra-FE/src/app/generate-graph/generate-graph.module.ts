import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { SharedModule } from '../shared/shared.module';
import { GenerateGraphRoutingModule } from './generate-graph-routing.module';
import { GenerateGraphComponent } from './generate-graph.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    GenerateGraphComponent,
    GraphComponent
  ],
  imports: [
    SharedModule,
    GenerateGraphRoutingModule,

    // 3rd party
    GoogleChartsModule,
  ]
})
export class GenerateGraphModule { }
