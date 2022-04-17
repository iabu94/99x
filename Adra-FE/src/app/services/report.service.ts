import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report, ReportUpload } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private url = 'https://localhost:5001/api/Report'

  constructor(private http: HttpClient) { }

  uploadCsv(formValue: ReportUpload, isUpdate: boolean = false) {
    if (!formValue.file) {
      return;
    }
    const formData = new FormData();
    formData.append('file', formValue.file);
    formData.append('year', formValue.year.toString());
    formData.append('month', formValue.month.toString());
    formData.append('isUpdate', isUpdate.toString());

    const uploadReq = new HttpRequest('POST', `${this.url}/Upload`, formData, {
      reportProgress: true,
    });
    // Using request method instead of post method because we have to send a file along with the request. 
    // So we are sending as form data.
    return this.http.request(uploadReq);
  }

  getAccountBalances(formValue: any) {
    return this.http.get<Report>(`${this.url}/${formValue.year}/${formValue.month}`);
  }

  checkReportExists(formValue: any) {
    return this.http.get<boolean>(`${this.url}/Exists/${formValue.year}/${formValue.month}`);
  }
}
