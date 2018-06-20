import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';
import { AddSalesOrderComponent } from './add-sales-order/add-sales-order.component';
import { EditSalesOrderComponent } from './edit-sales-order/edit-sales-order.component';
import { SalesOrderDetailComponent } from './sales-order-detail/sales-order-detail.component';
import { SalesorderService } from './salesorder.service';

@NgModule({
  declarations: [
    AppComponent,
    SalesOrderListComponent,
    AddSalesOrderComponent,
    EditSalesOrderComponent,
    SalesOrderDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SalesorderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
