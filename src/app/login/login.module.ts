import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [ LoginComponent ]
})
export class LoginModule { }
