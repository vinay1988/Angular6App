import { Component, OnInit } from '@angular/core';
import { SalesOrder } from '../SalesOrder';
import { SalesorderService } from '../salesorder.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-sales-order',
  templateUrl: './add-sales-order.component.html',
  styleUrls: ['./add-sales-order.component.css']
})
export class AddSalesOrderComponent implements OnInit {

  public SO:SalesOrder;
  public retSO:any;
  
  constructor(private service:SalesorderService,public router: Router) { 
    
  }

  onSubmit()
  {
    //let so:Observable<SalesOrder[]>;
    
     this.service.addSalesOrder(this.SO)
    .subscribe(res => {console.log("saved"); this.retSO= res;
    alert(this.retSO.SalesOrderId) ;
  if(this.retSO.SalesOrderId>0)
  {
    this.router.navigate(['/salesorderlist']);
  }
  

  
  }
          ,() => { console.error("error while save"); }
           //return throwError(error);}
          
          
       );
   
  
      }

  ngOnInit() {
    this.SO=new SalesOrder();
  }

}
