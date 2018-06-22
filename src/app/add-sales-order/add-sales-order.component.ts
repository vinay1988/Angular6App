import { Component, OnInit } from '@angular/core';
import { SalesOrder } from '../SalesOrder';
import { SalesorderService } from '../salesorder.service';


@Component({
  selector: 'app-add-sales-order',
  templateUrl: './add-sales-order.component.html',
  styleUrls: ['./add-sales-order.component.css']
})
export class AddSalesOrderComponent implements OnInit {

  public SO:SalesOrder;
  
  constructor(private service:SalesorderService) { 
    
  }

  onSubmit()
  {
    
    alert(JSON.stringify(this.SO))
    this.service.addSalesOrder(this.SO);
  }

  ngOnInit() {
    this.SO=new SalesOrder();
  }

}
