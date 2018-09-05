import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  public isLogin:boolean;
  constructor(public router: Router) { 
    
  }
  title = 'app';

  logout() {
    alert("logout");
    localStorage.clear();
      this.router.navigate(['/login']);
  }

  ngOnInit()
  {
    if (localStorage.getItem('userToken') != null)
    this.isLogin= true;
    else
    this.isLogin= false;
  }
}
