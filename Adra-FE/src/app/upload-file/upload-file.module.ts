import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
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
    CommonModule,
    UploadFileRoutingModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatDialogModule
  ]
})
export class UploadFileModule { }
