import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';

import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';

import { Icons } from './../config/icon.config';


@NgModule({
    imports: [CommonModule, MaterialModule, LoginRoutingModule],
    declarations: [LoginComponent],
    providers: [Icons]
})
export class LoginModule { }
