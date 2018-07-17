import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SalesOrder } from './SalesOrder';
import { Observable, throwError } from 'rxjs';
import { Currency } from './Currency';




@Injectable({
  providedIn: 'root'
})
export class SalesorderService {
  handleError(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  private soUrl = 'http://localhost/MyAngAppAPI/api/values';
  private _currency = 'http://localhost/MyAngAppAPI/api/Currency';
 
saleorderr:SalesOrder;
  getSalesOrder():  Observable<SalesOrder[]> {
   
   return this.http.get<SalesOrder[]>(this.soUrl);
   
  }

 public addSalesOrder(addso:SalesOrder) {
   
  return  this.http.post(this.soUrl, addso);
        // .subscribe(res => {console.log("saved"); return (res); }
        //   ,error=>{console.error("error while save");
        //    return throwError(error);}
          
          
       // );
      }

      
 public updateSalesOrder(updateso:SalesOrder) {
  return  this.http.put(this.soUrl+'/'+updateso.SalesOrderId, updateso);
 }


      

    //     this.http.post(this.soUrl, addso)
    // .subscribe(
    //     (val) => {
    //         console.log("POST call successful value returned in body", 
    //                     val);
    //                     this.salesorderId=val;
    //     },
    //     response => {
    //         console.log("POST call in error", response);
    //     },
    //     () => {
    //         console.log("The POST observable is now completed.");
    //     });

   
        
 // }

//   addSalesOrder (body: Object): Observable<SalesOrder[]> {
//     let bodyString = JSON.stringify(body); // Stringify payload
//     return this.http.post(this.soUrl, bodyString, {
//         headers: new HttpHeaders().set('Content-Type', 'application/json'), // adding headers to request
//     }).map(res=>{console.log("saved")}); // ...using post request
//                      //.map(res => res ) // ...now we return data
//                      //.catch((error:any) => Observable.throw(error.json().error || 'Server error')); // ...errors if any
// }

getCurrency():  Observable<Currency[]> {
   
  return this.http.get<Currency[]>(this._currency);
  
}


   getSalesOrderById(id) : any{
   
   return this.http.get(this.soUrl+'/'+id);
   
  }

  constructor(private http: HttpClient) {
    this.saleorderr=new SalesOrder();
   }
}
