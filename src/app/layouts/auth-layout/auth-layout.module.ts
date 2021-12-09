import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthLayoutComponent} from './auth-layout.component';
import {AuthRouting} from '../../routes/auth.routing';
import { LoginComponent } from 'src/app/pages/auth/login/login.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRouting
  ]
})
export class AuthLayoutModule {
}
