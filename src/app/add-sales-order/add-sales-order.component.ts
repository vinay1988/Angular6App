import { Component, OnInit } from '@angular/core';
import { SalesOrder } from '../SalesOrder';
import { SalesorderService } from '../salesorder.service';
import { Router } from '@angular/router';
import { Currency } from '../Currency';


@Component({
  selector: 'app-add-sales-order',
  templateUrl: './add-sales-order.component.html',
  styleUrls: ['./add-sales-order.component.css']
})
export class AddSalesOrderComponent implements OnInit {

  public SO:SalesOrder;
  public retSO:any;
   public _currency:Currency[];
  
  constructor(private service:SalesorderService,public router: Router) { 
    
  }

  onSubmit()
  {
    //let so:Observable<SalesOrder[]>;
    
     this.service.addSalesOrder(this.SO)
    .subscribe(res => this.retSO = res);
    this.router.navigate(['/salesorderlist']);
 //   alert(this.retSO.salesOrderId) ;
  // if(this.retSO.salesOrderId>0)
  // {
  //   this.router.navigate(['/salesorderlist']);
  // }
  

  
}
        
   
  
      

      getCurrencies():void{
           this.service.getCurrency()
        .subscribe(_currency=>{this._currency=_currency;});

  }

  ngOnInit() {
    this._currency=[];
    this.SO=new SalesOrder();
    this.retSO=new SalesOrder();
    this.getCurrencies();
    //alert(this._currency);
  }

 

  

}
