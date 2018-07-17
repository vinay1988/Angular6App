import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesorderService } from '../salesorder.service';
import { SalesOrder } from '../SalesOrder';
import { toDate } from '@angular/common/src/i18n/format_date';
import { Currency } from '../Currency';

@Component({
  selector: 'app-edit-sales-order',
  templateUrl: './edit-sales-order.component.html',
  styleUrls: ['./edit-sales-order.component.css']
})
export class EditSalesOrderComponent implements OnInit {
  public SO:SalesOrder=new SalesOrder();
  SON: number;
  _currency:Currency[];
  
  constructor(private route: ActivatedRoute,private service:SalesorderService) { }

    getSalesOrderById():void
    {
      this.service.getSalesOrderById(this.route.snapshot.params['id'])
        .subscribe(_so=> {
          this.SO=_so;
          var d =new Date(this.SO.CurrencyDate);
          this.SO.CurrencyDate = this.Dateformat(d,"input");
          });

       // alert(this.SO.SalesOrderNumber);
       //|  'ddMMyyyy'
    }

    Dateformat(date: Date, displayFormat: Object): string {

      if (displayFormat === 'input') {
          const day = date.getDate();
          const month = date.getMonth()+1;
          const year = date.getFullYear();
          return `${year}-${month < 10 ? '0' + month : '' + month}-${day}`;
          //return `2018-07-11`;
      } else {
          return date.toDateString();
      }
  }
      
  getCurrencies():void{
    this.service.getCurrency()
 .subscribe(_currency=>{this._currency=_currency;});

}


onSubmit()
{
  
  
   this.service.updateSalesOrder(this.SO)
  .subscribe(res => {console.log("saved"); 
// if(this.retSO.SalesOrderId>0)
// {
//   this.router.navigate(['/salesorderlist']);
//}



}
        ,() => { console.error("error while save"); }
         //return throwError(error);}
        
        
     );
 

    }

  ngOnInit() {
   this.getCurrencies();
   this.getSalesOrderById();
  
  }

}
