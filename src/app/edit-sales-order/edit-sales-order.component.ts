import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesorderService } from '../salesorder.service';
import { SalesOrder } from '../SalesOrder';

@Component({
  selector: 'app-edit-sales-order',
  templateUrl: './edit-sales-order.component.html',
  styleUrls: ['./edit-sales-order.component.css']
})
export class EditSalesOrderComponent implements OnInit {
  public SO:SalesOrder=new SalesOrder();
  SON: number;
  constructor(private route: ActivatedRoute,private service:SalesorderService) { }

    getSalesOrderById():void
    {
      this.service.getSalesOrderById(this.route.snapshot.params['id'])
        .subscribe(_so=> {
          this.SO=_so;
          });

       // alert(this.SO.SalesOrderNumber);
    }

  ngOnInit() {
   // alert(this.route.snapshot.params['id']);
   //this.SO=new SalesOrder();
   this.getSalesOrderById();
  
  }

}
