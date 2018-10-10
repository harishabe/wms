import { Component, OnInit } from '@angular/core';
import { Icons } from './../config/icon.config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showProgressBar = false;
  wmsLoginObj = { "username": '', "password": '' };
  constructor(private icon: Icons, private router: Router) { }

  ngOnInit() {
  }

  /**
   * @name login
   * @desc login function
  */

  login() {
    
    debugger;
    this.showProgressBar = true;
    if (this.wmsLoginObj.username === 'wms' && this.wmsLoginObj.password === 'wms') {
      this.showProgressBar = true;
      this.router.navigate(['/dashboard/wms']);
    } else {
      this.showProgressBar = false;
    }
  }

}
