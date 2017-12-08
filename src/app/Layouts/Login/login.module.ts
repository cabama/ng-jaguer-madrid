import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Routing
import { LoginRoutingModule, routerComponents } from './login-routing.module';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    MatSnackBarModule
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
