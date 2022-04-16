import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Month } from '../enums/month';
import { Report } from '../models';
import { TestService } from '../test.service';
import { MatDialog } from "@angular/material/dialog";
import { ReportExistsConfirmationDialogComponent } from '../dialog-components';

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

  constructor(private fb: FormBuilder, private svc: TestService, public dialog: MatDialog) {
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
    this.svc.checkReportExists(this.fileUploadForm.value).subscribe(exists => {
      if (exists) {
        const dialogRef = this.dialog.open(ReportExistsConfirmationDialogComponent);
        dialogRef.afterClosed().subscribe(agree => {
          if (agree) {
            this.svc
              .update(this.fileUploadForm.value)
              ?.subscribe((data: any) => {
                this.report = data.body;
              });
          }
        });
      } else {
        this.svc
          .upload(this.fileUploadForm.value)
          ?.subscribe((data: any) => {
            this.report = data.body;
          });
      }
    });
  }

}
