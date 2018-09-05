import { Component, OnInit } from '@angular/core';
import { SalesorderService } from '../salesorder.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private service:SalesorderService,private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(userName,password){
    this.service.userAuthentication(userName,password).subscribe((data : any)=>{
     localStorage.setItem('userToken',data.access_token);
     this.router.navigate(['/salesorderlist']);
   },
   (err : HttpErrorResponse)=>{
     this.isLoginError = true;
   });
 }

}
