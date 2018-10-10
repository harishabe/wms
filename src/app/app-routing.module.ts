import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './layout/layout.module#LayoutModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
  { path: 'forget-password', loadChildren: './forget-pwd/forget-pwd.module#ForgetPwdModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
