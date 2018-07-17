import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesorderService } from '../salesorder.service';
import { SalesOrder } from '../SalesOrder';

@Component({
  selector: 'app-sales-order-detail',
  templateUrl: './sales-order-detail.component.html',
  styleUrls: ['./sales-order-detail.component.css']
})
export class SalesOrderDetailComponent implements OnInit {
  public SO:SalesOrder=new SalesOrder();
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
  ngOnInit() {
    this.getSalesOrderById();
  }

}
