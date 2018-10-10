import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPwdComponent } from './forget-pwd.component';

const routes: Routes = [
    {
        path: '',
        component: ForgetPwdComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForgetPwdRoutingModule {}
