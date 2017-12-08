import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { User } from '../Models/user';
import { StorageKeys } from 'app/Config/localStorage';
import { UserService } from './user.service';

@Injectable()
export class AuthService implements CanActivate {

  constructor(
    private router: Router,
    private _userService: UserService,
  ) {}

  canActivate() {
    console.log(`can activate: ${this._userService.authenticated}`);
    // If the user is not logged in we'll send them back to the home page
    if (!this._userService.authenticated) {
      this.router.navigate(['Login', 'SignIn']);
      return false;
    }
    return true;
  }
}

@Injectable()
export class AuthAdminService implements CanActivate {

  constructor(
    private router: Router,
    private _userService: UserService,
  ) { }

  canActivate() {
    console.log(`can activate: ${this._userService.authenticated}`);
    if (
      this._userService.authenticated &&
      this._userService.userAuth.role === 'ADMIN'
    ) {
      return true;
    }
    return false;
  }
}
