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
   
   return this.http.get<SalesOrder[]>(this.soUrl);
   
  }

  addSalesOrder(addso:SalesOrder) {
    // const obj = {
    //   unit_name: unit_name,
    //   unit_price: unit_price
    // };
    this.http.post(this.soUrl, addso)
        .subscribe(res => console.log('Done'));
  }

  constructor(private http: HttpClient) { }
}
