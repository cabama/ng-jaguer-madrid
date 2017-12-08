import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Routing
import { LoginRoutingModule, routerComponents } from './login-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule,
  ],
  declarations: [
    routerComponents
  ]
})

export class LoginModule {
  constructor () {
    console.log('Modulo login');
  }
}
