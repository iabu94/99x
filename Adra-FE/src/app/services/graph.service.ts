import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private url = 'https://localhost:5001/api/Report/Graph'

  constructor(private http: HttpClient) { }

  getGraphData({ yearStart, monthStart, yearEnd, monthEnd }: any) {
    const body = { yearStart, monthStart, yearEnd, monthEnd };
    return this.http.post<Report[]>(`${this.url}`, body);
  }
}
