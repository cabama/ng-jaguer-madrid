import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService {
    public url: string;
    public requestUrl: string;

    constructor (private _http: Http) {
        this.url = GLOBAL.url;
        this.requestUrl = this.url + 'login';
    }

    signup (email, password, getHash = null): Observable<Response> {
        const headers = new Headers({'Content-Type': 'application/json'});
        const params = JSON.stringify({
            email: email,
            password: password
        });
        return this._http.post(this.requestUrl, params, {headers}).map( res => res.json());
    }
}
