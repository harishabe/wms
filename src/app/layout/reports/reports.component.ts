import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  displayedColumns = ['clId_RRNo', 'Date', 'pressureValue', 'flowValue','magValue','functions','valveId','reqStatusStr','directionString','pulse','deg','turns'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}

export interface PeriodicElement {
  clId_RRNo: any;
  Date: any;
  pressureValue: any;
  flowValue: any;
  magValue:any;
  functions:any;
  valveId:any;
  reqStatusStr:any;
  directionString:any;
  pulse:any;
  deg:any;
  turns:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    "clId_RRNo": "S-587323",
    "Date": "8/30/2018 15:22",
    "pressureValue": "118.87",
    "flowValue": "5.46",
    "magValue": "0",
    "functions": "Open",
    "valveId": "SW4CVSM01_bs",
    "reqStatusStr": "Open",
    "directionString": "CW",
    "pulse": "0",
    "deg": "12960",
    "turns": "36"
  },
  {
    "clId_RRNo": "S-587323",
    "Date": "8/30/2018 15:23",
    "pressureValue": "125.53",
    "flowValue": "5.21",
    "magValue": "0",
    "functions": "",
    "valveId": "",
    "reqStatusStr": "",
    "directionString": "",
    "pulse": "",
    "deg": "",
    "turns": ""
  },
  {
    "clId_RRNo": " S-587323",
    "Date": "8/30/2018 15:24",
    "pressureValue": "126.42",
    "flowValue": "4.86",
    "magValue": "0",
    "functions": "",
    "valveId": "",
    "reqStatusStr": "",
    "directionString": "",
    "pulse": "",
    "deg": "",
    "turns": ""
  },
  {
    "clId_RRNo": " S-587323",
    "Date": "8/30/2018 15:25",
    "pressureValue": "118.57",
    "flowValue": "4.58",
    "magValue": "0",
    "functions": "",
    "valveId": "",
    "reqStatusStr": "",
    "directionString": "",
    "pulse": "",
    "deg": "",
    "turns": ""
  }
];


