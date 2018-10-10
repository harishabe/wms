import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';

import { ForgetPwdRoutingModule } from './forget-pwd.routing.module';
import { ForgetPwdComponent } from './forget-pwd.component';
import { Icons } from './../config/icon.config';


@NgModule({
    imports: [CommonModule, MaterialModule, ForgetPwdRoutingModule],
    declarations: [ForgetPwdComponent],
    providers:[Icons]
})
export class ForgetPwdModule { }
