import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { GoogleChartsModule } from 'angular-google-charts';
import { GenerateGraphRoutingModule } from './generate-graph-routing.module';
import { GenerateGraphComponent } from './generate-graph.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    GenerateGraphComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    GenerateGraphRoutingModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatSelectModule,
    GoogleChartsModule,
    MatButtonModule
  ]
})
export class GenerateGraphModule { }
