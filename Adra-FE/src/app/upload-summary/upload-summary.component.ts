import { Component, Input, OnInit } from '@angular/core';
import { Month } from '../enums/month';
import { Report } from '../models';

@Component({
  selector: 'adra-upload-summary',
  templateUrl: './upload-summary.component.html',
  styleUrls: ['./upload-summary.component.scss']
})
export class UploadSummaryComponent {
  months = Month;
  @Input() report: Report = {} as Report;
  @Input() dataSource: any;
  @Input() displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
}
