import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { localStorageItems } from '../Config/localStorage';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './share.service';
import { CanActivate } from '@angular/router';
import { User } from '../Models/user';



// Avoid name not found warnings
declare var auth0: any;

@Injectable()
export class AuthService implements CanActivate{

  // Create a stream of logged in status to communicate throughout app
  private logined: boolean;
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(
    private _http: Http,
    private router: Router,
    private shared: SharedService
  ) {
    if (this.authenticated) {
      // this.login()
      this.shared.token = window.localStorage.getItem(localStorageItems.token);
    }
  }

  get userAuth (): User {
    return JSON.parse(window.localStorage.getItem(localStorageItems.user)) as User;
  }

  canActivate() {
    console.log(`can activate: ${this.authenticated}`);
    // If the user is not logged in we'll send them back to the home page
    if (!this.authenticated) {
      this.router.navigate(['Login', 'SignIn']);
      return false;
    }
    return true;
  }

  get authenticated(): boolean {
      // Check if there's an unexpired access token
      if (
        !!window.localStorage.getItem(localStorageItems.token) &&
        !!window.localStorage.getItem(localStorageItems.user)
      ) {
        return true;
      } else {
        return false;
      }
  }

  login(email, password, getHash = false): Promise<any> {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const params = ({
          email: email,
          password: password,
          getHash: getHash
      });
      return this._http.post(this.shared.baseUrl, params, { headers: headers }).map(res => res.json()).toPromise();
  }
}
