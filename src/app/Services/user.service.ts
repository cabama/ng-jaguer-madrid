import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { RequestOptions } from '@angular/http';

@Injectable()
export class UserService {
  public url: string;
  public requestUrl: string;
  private keyStorageToken = 'jaguerToken';
  private keyStorageUser = 'jaguerUser';

  constructor (private _http: Http) {
    this.url = document.location.origin + '/api';
    this.requestUrl = this.url + '/login';
  }

  signup (email, password, getHash = false): Promise<any> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const params = ({
      email: email,
      password: password,
      getHash: getHash
    });
    return this._http.post(this.requestUrl, params, { headers: headers }).map(res => res.json()).toPromise();
  }

  saveLogin (response) {
    localStorage.setItem(this.keyStorageToken, response.token);
    localStorage.setItem(this.keyStorageUser, JSON.stringify(response.user));
  }

  getUser () {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    // return this._http.post(this.requestUrl, params, { headers: headers }).map(res => res.json()).toPromise();
  }
}


