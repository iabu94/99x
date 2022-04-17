import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Month } from 'src/app/enums';
import { Report } from 'src/app/models';
import { ReportService } from 'src/app/services';
import { ReportExistsConfirmationDialogComponent } from '../report-exists-confirmation-dialog/report-exists-confirmation-dialog.component';

@Component({
  selector: 'adra-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  fileUploadForm: FormGroup;
  report!: Report;
  months = Month;
  keys: number[] = [];

  constructor(private fb: FormBuilder, private reportService: ReportService, public dialog: MatDialog) {
    this.fileUploadForm = this.fb.group({
      year: new FormControl(new Date().getFullYear(), Validators.required),
      month: new FormControl(new Date().getMonth() + 1, Validators.required),
      file: new FormControl(null, Validators.required),
    });
    this.keys = Object.keys(this.months)
      .filter((k) => !isNaN(Number(k)))
      .map(Number);
  }

  onFileSelected(files: any) {
    this.fileUploadForm.controls['file'].setValue(files[0]);
  }

  uploadReport() {
    this.reportService.checkReportExists(this.fileUploadForm.value).subscribe(exists => {
      if (exists) {
        const dialogRef = this.dialog.open(ReportExistsConfirmationDialogComponent);
        dialogRef.afterClosed().subscribe(agree => {
          if (agree) {
            this.reportService
              .uploadCsv(this.fileUploadForm.value, true)
              ?.subscribe((data: any) => {
                this.report = data.body;
              });
          }
        });
      } else {
        this.reportService
          .uploadCsv(this.fileUploadForm.value)
          ?.subscribe((data: any) => {
            this.report = data.body;
          });
      }
    });
  }

}
