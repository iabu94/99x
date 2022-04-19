import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Report } from '../models';
import { handleError } from './error-handler';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private url = `${environment.apiUrl}/Report/Graph`;

  constructor(private http: HttpClient) { }

  getGraphData({ yearStart, monthStart, yearEnd, monthEnd }: any) {
    const body = { yearStart, monthStart, yearEnd, monthEnd };
    return this.http.post<Report[]>(`${this.url}`, body).pipe(
      catchError(handleError)
    );
  }
}
