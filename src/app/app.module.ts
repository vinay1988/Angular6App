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
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', redirectTo: '/salesorderlist',  pathMatch: 'full',canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'salesorderlist', component: SalesOrderListComponent,canActivate:[AuthGuard] },
  { path: 'addsalesorder', component: AddSalesOrderComponent,canActivate:[AuthGuard]  },
   { path: 'editsalesorder/:id', component: EditSalesOrderComponent ,canActivate:[AuthGuard] },
   { path: 'Detail/:id', component: SalesOrderDetailComponent,canActivate:[AuthGuard]  },
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
    SalesOrderDetailComponent,
    LoginComponent
    
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule
    
  ],
  exports:[RouterModule],
  providers: [SalesorderService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
