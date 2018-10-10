import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { SignupRoutingModule } from './signup.routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        SignupRoutingModule
    ],
    declarations: [SignupComponent]
})
export class SignupModule { }
