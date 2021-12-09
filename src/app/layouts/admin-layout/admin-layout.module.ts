import { PreReportComponent } from './../../pages/admin/pre-report/pre-report.component';
import { PreReportContentComponent } from './../../pages/admin/pre-report-content/pre-report-content.component';
import { PreReportParametersComponent } from './../../pages/admin/pre-report-parameters/pre-report-parameters.component';
import { PreSettingSystemSettingComponent } from './../../pages/admin/pre-setting-system-setting/pre-setting-system-setting.component';
import { PreSettingEmailComponent } from './../../pages/admin/pre-setting-email/pre-setting-email.component';
import { PreSettingSecurityComponent } from './../../pages/admin/pre-setting-security/pre-setting-security.component';
import { PreSettingUsermanagementComponent } from './../../pages/admin/pre-setting-usermanagement/pre-setting-usermanagement.component';
import { PreSettingComponent } from './../../pages/admin/pre-setting/pre-setting.component';
import { PreTemplateReportComponent } from './../../pages/admin/pre-template-report/pre-template-report.component';
import { PreBatchComponent } from './../../pages/admin/pre-batch/pre-batch.component';
import { PreImportComponent } from './../../pages/admin/pre-import/pre-import.component';
import { PreDashboardComponent } from './../../pages/admin/pre-dashboard/pre-dashboard.component';
import { MappingComponent } from './../../pages/admin/mapping/mapping.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLayoutComponent} from './admin-layout.component';
import {AdminRouting} from '../../routes/admin.routing';
import {ComponentsModule} from '../../components/components.module';
import { ApproveComponent } from 'src/app/pages/admin/approve/approve.component';
import { CreateComponent } from 'src/app/pages/admin/create/create.component';
import { PreDataDefineComponent } from 'src/app/pages/admin/pre-data-define/pre-data-define.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    MappingComponent,
    CreateComponent,
    ApproveComponent,
    PreDashboardComponent,
    PreImportComponent,
    PreBatchComponent,
    PreDataDefineComponent,
    PreTemplateReportComponent,
    PreSettingComponent,
    PreSettingUsermanagementComponent,
    PreSettingSecurityComponent,
    PreSettingEmailComponent,
    PreSettingSystemSettingComponent,
    PreReportComponent,
    PreReportContentComponent,
    PreReportParametersComponent
  ],
  imports: [
    CommonModule,
    AdminRouting,
    ComponentsModule,
    BsDropdownModule
  ]
})
export class AdminLayoutModule {
}
