import { Component, OnInit } from '@angular/core';
import { SalesorderService } from '../salesorder.service';
import { SalesOrder } from '../SalesOrder';


@Component({
  selector: 'app-sales-order-list',
  templateUrl: './sales-order-list.component.html',
  styleUrls: ['./sales-order-list.component.css']
})
export class SalesOrderListComponent implements OnInit {
  public _salesorder:any[];

   getSalesOrder():void{
     this.service.getSalesOrder()
     .subscribe(so=>{this._salesorder=so;});
   }

  constructor(private service:SalesorderService) { 
    
  }

  ngOnInit() {

    //localStorage.clear();
    //alert(localStorage.getItem('userToken'));
    if (localStorage.getItem('userToken') == null)
    {
       this.service.userAuthentication('admin','admin123').subscribe((data : any)=>{
        localStorage.setItem('userToken',data.access_token);
        alert(localStorage.getItem('userToken'));
        
    }
      )}
      
      this._salesorder=[];
      this.getSalesOrder();
    }

}
