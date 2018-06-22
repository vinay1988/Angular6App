import { Component, OnInit } from '@angular/core';
import { SalesorderService } from '../salesorder.service';
import { SalesOrder } from '../SalesOrder';


@Component({
  selector: 'app-sales-order-list',
  templateUrl: './sales-order-list.component.html',
  styleUrls: ['./sales-order-list.component.css']
})
export class SalesOrderListComponent implements OnInit {
  _salesorder:SalesOrder[];

   getSalesOrder():void{
     this.service.getSalesOrder()
     .subscribe(_salesorder=>this._salesorder=_salesorder);
   }

  constructor(private service:SalesorderService) { }

  ngOnInit() {
    this.getSalesOrder();
  }

}
