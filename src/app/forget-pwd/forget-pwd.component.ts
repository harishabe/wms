import { Component, OnInit } from '@angular/core';
import { Icons } from './../config/icon.config';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.scss']
})
export class ForgetPwdComponent implements OnInit {

  constructor(public icon:Icons) { }

  ngOnInit() {
  }

}
