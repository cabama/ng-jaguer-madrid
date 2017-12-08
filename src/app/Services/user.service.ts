import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { RequestOptions } from '@angular/http';
import { SharedService } from './share.service';
import { StorageKeys } from 'app/Config/localStorage';
import { User } from 'app/Models/user';
import { Subscription } from 'rxjs/Subscription';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class UserService {
  public url: string;
  public requestUrl: string;
  private user: User;
  private storageKey;

  constructor (
    private _http: Http,
    private _shared: SharedService
  ) {
    this.url = document.location.origin + '/api';
    this.requestUrl = this.url + '/login';
    this.user = JSON.parse(window.localStorage.getItem(StorageKeys.user)) as User;
  }

  get userAuth() {
    return this.user;
  }

  get authenticated(): boolean {
    // Check if there's an unexpired access token
    if (
      !!window.localStorage.getItem(StorageKeys.token) &&
      !!window.localStorage.getItem(StorageKeys.user)
    ) {
      return true;
    } else {
      return false;
    }
  }

  signup (email, password, getHash = false): Promise<any> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const params = ({
      email: email,
      password: password,
      getHash: getHash
    });
    const observer = this._http.post(this.requestUrl, params, { headers: headers }).map(res => res.json());
    observer.subscribe().add(this.setUserFromRequest)
    return observer.toPromise();
  }

  saveLogin (response) {
    localStorage.setItem(this.storageKey.token, response.token);
    localStorage.setItem(this.storageKey.user, JSON.stringify(response.user));
  }

  login(email, password, getHash = false): Promise<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const params = ({
      email: email,
      password: password,
      getHash: getHash
    });
    return this._http.post(this._shared.baseUrl, params, { headers: headers }).map(res => res.json()).toPromise();
  }

  logout() {
    localStorage.removeItem(this.storageKey.token);
    localStorage.removeItem(this.storageKey.user);
    this.user = undefined;
  }

  private async setUserFromRequest (a) {
    debugger;
  }

}


