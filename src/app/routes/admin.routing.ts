import { PreReportComponent } from './../pages/admin/pre-report/pre-report.component';
import { PreSettingComponent } from './../pages/admin/pre-setting/pre-setting.component';
import { PreTemplateReportComponent } from './../pages/admin/pre-template-report/pre-template-report.component';
import { PreDataDefineComponent } from './../pages/admin/pre-data-define/pre-data-define.component';
import { PreBatchComponent } from './../pages/admin/pre-batch/pre-batch.component';
import { PreImportComponent } from './../pages/admin/pre-import/pre-import.component';
import { PreDashboardComponent } from './../pages/admin/pre-dashboard/pre-dashboard.component';
import { CreateComponent } from './../pages/admin/create/create.component';
import { MappingComponent } from './../pages/admin/mapping/mapping.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from '../layouts/admin-layout/admin-layout.component';
import { ApproveComponent } from '../pages/admin/approve/approve.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'mapping',
        pathMatch: 'full',
        redirectTo: 'mapping'
      },
      {
        path: 'mapping',
        component: MappingComponent
      },
      {
        path: 'create',
        pathMatch: 'full',
        redirectTo: 'create'
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'approve',
        pathMatch: 'full',
        redirectTo: 'approve'
      },
      {
        path: 'approve',
        component: ApproveComponent
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: PreDashboardComponent
      },
      {
        path: 'import',
        pathMatch: 'full',
        redirectTo: 'import'
      },
      {
        path: 'import',
        component: PreImportComponent
      },
      {
        path: 'batch',
        pathMatch: 'full',
        redirectTo: 'batch'
      },
      {
        path: 'batch',
        component: PreBatchComponent
      },
      {
        path: 'data-manage',
        pathMatch: 'full',
        redirectTo: 'data-manage'
      },
      {
        path: 'data-manage',
        component: PreDataDefineComponent
      },
      {
        path: 'template-report',
        pathMatch: 'full',
        redirectTo: 'template-report'
      },
      {
        path: 'template-report',
        component: PreTemplateReportComponent
      },
      {
        path: 'setting',
        pathMatch: 'full',
        redirectTo: 'setting'
      },
      {
        path: 'setting',
        component: PreSettingComponent
      },
      {
        path: 'report',
        pathMatch: 'full',
        redirectTo: 'report'
      },
      {
        path: 'report',
        component: PreReportComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouting { }
