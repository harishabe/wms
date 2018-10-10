import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-wms-dashboard',
  templateUrl: './wms-dashboard.component.html',
  styleUrls: ['./wms-dashboard.component.scss']
})
export class WmsDashboardComponent implements OnInit {
  expandToggle: Boolean = true;
  waterSchema: Boolean = true;
  switchStatus: string = '';
  showWp: Boolean = true;
  showFbd: Boolean = false;

  CONTRAL_VALUES = [{
    'on': './../../../assets/img/svg/SMCVClose.svg',
    'off': './../../../assets/img/svg/SMCVOpen.svg',
  }, {
    'on': './../../../assets/img/svg/SMCVClose.svg',
    'off': './../../../assets/img/svg/SMCVOpen.svg',
  }, {
    'on': './../../../assets/img/svg/SMCVClose.svg',
    'off': './../../../assets/img/svg/SMCVOpen.svg',
  }];

  MANUAL_PANEL = [{
    'on': './../../../assets/img/svg/mvClose.svg',
    'off': './../../../assets/img/svg/mvOpen.svg',
  }, {
    'on': './../../../assets/img/svg/mvClose.svg',
    'off': './../../../assets/img/svg/mvOpen.svg',
  }, {
    'on': './../../../assets/img/svg/mvClose.svg',
    'off': './../../../assets/img/svg/mvOpen.svg',
  }];

  PANEL_OBJ = [
    {
      "clId": "girijaa",
      "sourceIdorSinkId": "bwssb",
      "motorId": "mvfloat91_smpTnk",
      "phase": "1",
      "phaseStatus": "ON",
      "controlValve": "SM",
      "manualValve": "m1",
      "sourceSinkType": "source",
      "schemaId": "sch9",
      "subSchemaId": "ssch1",
      "remarks": "BV-Ball Valve",
      "elementType": "BV",
      "currentmode": "",
      "currentdirection": "",
      "currentpulse": "",
      "currentdegree": "",
      "triggermode": "",
      "triggerdirection": "",
      "triggerpulse": "",
      "triggerdegree": "",
      "triggerstatus": "n"
    },
    {
      "clId": "girijaa",
      "sourceIdorSinkId": "tnkrSup",
      "motorId": "cv41_tnkrSup",
      "phase": "1",
      "controlValve": "SM",
      "manualValve": "m1",
      "sourceSinkType": "sink",
      "schemaId": "sch4",
      "subSchemaId": "ssch1",
      "altSubSource": "mv41_tnkrSup",
      "remarks": "ECV-Electric Control Valve",
      "elementType": "ECV",
      "currentmode": "3",
      "currentdirection": "0",
      "currentpulse": "1",
      "currentdegree": "1440",
      "currentStatus": "yn",
      "triggermode": "",
      "triggerdirection": "",
      "triggerpulse": "",
      "triggerdegree": "",
      "triggerstatus": "n"
    },
    {
      "clId": "girijaa",
      "sourceIdorSinkId": "bwssb",
      "motorId": "mvfloat91_smpTnk",
      "phase": "1",
      "phaseStatus": "ON",
      "controlValve": "SM",
      "manualValve": "m1",
      "sourceSinkType": "source",
      "schemaId": "sch9",
      "subSchemaId": "ssch1",
      "remarks": "BV-Ball Valve",
      "elementType": "BV",
      "currentmode": "",
      "currentdirection": "",
      "currentpulse": "",
      "currentdegree": "",
      "triggermode": "",
      "triggerdirection": "",
      "triggerpulse": "",
      "triggerdegree": "",
      "triggerstatus": "n"
    }
  ];

  constructor(private http: Http) { }

  ngOnInit() {
    this.loadNavItems();
  }

  expand() {
    this.expandToggle = !this.expandToggle;
  }

  waterSchemaExpand() {
    this.waterSchema = !this.waterSchema;
  }

  motorPanelSwitch(status) {
    this.switchStatus = status;
    if (status === 'OFF') {
      this.switchStatus = 'ON';
    }
    if (status === 'ON') {
      this.switchStatus = 'OFF';
    }
  }

  fullscreen() {
    document.getElementById("fullScreen").webkitRequestFullScreen();
  }

  wp() {
    this.showWp = true;
    this.showFbd = false;
  }

  fbd() {
    this.showFbd = true;
    this.showWp = false;
  }

  navItems:any;
  loadNavItems() {
    alert('api call');
    this.http.get("../../../../src/app/layout/wms-dashboard/wms-panel.json")
      .subscribe((success) => {
        this.navItems = success.json();
        console.log('this navItems',this.navItems);
      });
  }

}
