import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Month } from './enums/month';
import { TestService } from './test.service';

@Component({
  selector: 'adra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Adra-FE';
  months = Month;
  keys: number[] = [];
  fileUploadForm: FormGroup;

  constructor(private fb: FormBuilder, private svc: TestService) {
    this.keys = Object.keys(this.months)
      .filter((k) => !isNaN(Number(k)))
      .map(Number);
    this.fileUploadForm = this.fb.group({
      year: new FormControl(new Date().getFullYear(), Validators.required),
      month: new FormControl(new Date().getMonth() + 1, Validators.required),
      file: new FormControl(null, Validators.required),
    });
  }

  log(msg: string) {
    console.log(msg);
  }

  onFileSelected(files: any) {
    this.fileUploadForm.controls['file'].setValue(files[0]);
  }

  uploadReport() {
    console.log(this.fileUploadForm.value);
    this.svc
      .upload(this.fileUploadForm.value)
      ?.subscribe((data) => console.log(data));
  }
}
