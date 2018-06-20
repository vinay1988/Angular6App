import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SalesOrder } from './SalesOrder';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesorderService {
  private soUrl = 'http://localhost/MyAngAppAPI/api/values';

  getSalesOrder():  Observable<SalesOrder[]> {
   return this.http.get<SalesOrder[]>(this.soUrl)
   
  }
  constructor(private http: HttpClient) { }
}
