import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material';

import { ReportRoutingModule } from './reports.routing.module';
import { ReportsComponent } from './reports.component';


@NgModule({
    imports: [CommonModule, MaterialModule, ReportRoutingModule],
    declarations: [ReportsComponent]
})
export class ReportsModule { }
