import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SalesOrderListComponent } from './sales-order-list/sales-order-list.component';
import { AddSalesOrderComponent } from './add-sales-order/add-sales-order.component';
import { EditSalesOrderComponent } from './edit-sales-order/edit-sales-order.component';
import { SalesOrderDetailComponent } from './sales-order-detail/sales-order-detail.component';
import { SalesorderService } from './salesorder.service';

import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/salesorderlist',  pathMatch: 'full' },
  { path: 'salesorderlist', component: SalesOrderListComponent },
  { path: 'addsalesorder', component: AddSalesOrderComponent }
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'addhero', component: HeroFormComponent },
  // { path: 'TestRXJS', component: TestRxjsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SalesOrderListComponent,
    AddSalesOrderComponent,
    EditSalesOrderComponent,
    SalesOrderDetailComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    HttpModule
    
  ],
  exports:[RouterModule],
  providers: [SalesorderService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
