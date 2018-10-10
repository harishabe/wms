import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div [ngClass]="themeClass"><router-outlet></router-outlet></div>'
})
export class AppComponent {
  title = 'wms';
}
