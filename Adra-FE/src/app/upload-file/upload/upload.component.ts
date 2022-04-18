import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Month } from 'src/app/enums';
import { Report } from 'src/app/models';
import { ReportService } from 'src/app/services';
import { ReportExistsConfirmationDialogComponent } from '../report-exists-confirmation-dialog/report-exists-confirmation-dialog.component';

@Component({
  selector: 'adra-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnDestroy {
  fileUploadForm: FormGroup;
  report!: Report;
  months = Month;
  keys: number[] = [];

  subscription = new Subscription();

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
    const sub = this.reportService.checkReportExists(this.fileUploadForm.value).subscribe(exists => {
      if (exists) {
        const dialogRef = this.dialog.open(ReportExistsConfirmationDialogComponent);
        dialogRef.afterClosed().subscribe(agree => {
          if (agree) {
            const sub1 = this.reportService
              .uploadCsv(this.fileUploadForm.value, true)
              ?.subscribe((data: any) => {
                this.report = data.body;
              });
            this.subscription.add(sub1);
          }
        });
      } else {
        const sub2 = this.reportService
          .uploadCsv(this.fileUploadForm.value)
          ?.subscribe((data: any) => {
            this.report = data.body;
          });
        this.subscription.add(sub2);
      }
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
