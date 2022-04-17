import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReportExistsConfirmationDialogComponent } from './report-exists-confirmation-dialog/report-exists-confirmation-dialog.component';
import { UploadFileRoutingModule } from './upload-file-routing.module';
import { UploadFileComponent } from './upload-file.component';
import { UploadSummaryComponent } from './upload-summary/upload-summary.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    UploadFileComponent,
    UploadComponent,
    UploadSummaryComponent,
    ReportExistsConfirmationDialogComponent
  ],
  imports: [
    SharedModule,
    UploadFileRoutingModule,
  ]
})
export class UploadFileModule { }
