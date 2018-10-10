import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WmsDashboardComponent } from './wms-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: WmsDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WmsDashboardRoutingModule {}
