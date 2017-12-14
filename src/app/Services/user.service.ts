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
  private token: string;

  constructor (
    private _http: Http,
    private _shared: SharedService
  ) {
    this.url = document.location.origin + '/api';
    this.requestUrl = this.url + '/login';
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
    const observer = this._http.post(this.requestUrl, params, { headers: headers });
    this.setUserFromRequest(observer);
    return observer.map(res => res.json()).toPromise();
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
    this.user = undefined;
    this.removeLoginStorage();
  }

  private async setUserFromRequest (observer: Observable<Response>) {
    observer.subscribe(
      value => this.user
    );
  }

  getloginFromStorage () {
    this.user = JSON.parse(window.localStorage.getItem(StorageKeys.user)) as User;
    this.token = window.localStorage.getItem(StorageKeys.token)
  }

  removeLoginStorage() {
    localStorage.removeItem(StorageKeys.token);
    localStorage.removeItem(StorageKeys.user);
  }

  saveLoginStorage(response) {
    localStorage.setItem(StorageKeys.token, response.token);
    localStorage.setItem(StorageKeys.user, JSON.stringify(response.user));
  }

}


