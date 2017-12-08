import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { SignInComponent, SignedComponent } from './index';
import { AuthService } from 'app/Services/auth.service';
import {
  SignInComponent,
  SignedComponent 
} from '@login/index';

const routes: Routes = [
  { path: '', component: SignedComponent, canActivate: [AuthService] },
  { path: 'SignIn', component: SignInComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})

export class LoginRoutingModule {
  constructor () {
    console.log('Estoy en el constructor del routing');
  }
}

export const routerComponents = [ SignInComponent, SignedComponent ];
