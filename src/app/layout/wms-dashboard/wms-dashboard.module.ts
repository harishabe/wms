import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material';

import { WmsDashboardRoutingModule } from './wms-dashboard.routing.module';
import { WmsDashboardComponent } from './wms-dashboard.component';


@NgModule({
    imports: [CommonModule, FlexLayoutModule, MaterialModule, WmsDashboardRoutingModule],
    declarations: [WmsDashboardComponent]
})
export class WmsDashboardModule { }
