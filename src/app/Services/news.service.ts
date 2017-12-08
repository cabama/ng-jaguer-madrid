import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class NewsService {
  public url: string;
  public requestUrl: string;

  constructor (private _http: Http) {
    // this.url = GLOBAL.url;
    this.url = document.location.origin + '/api';
    this.requestUrl = this.url + '/news';
  }

  getAllNews (): Promise<any> {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this._http.get(this.requestUrl, { headers: headers }).map(res => res.json()).toPromise();
  }

  getNews(_id): Promise<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const params = ({ _id });
    const rerequestUrl = this.requestUrl + '/' + _id;
    return this._http.get(rerequestUrl, { headers: headers }).map(res => res.json()).toPromise();
  }

  createNew (token, noticia): Promise<any> {
    const rerequestUrl = this.requestUrl;
    const headers = new Headers({ 'Content-Type': 'application/json', 'authoritation': token});
    const options = new RequestOptions({headers: headers});
    const body = {
      tittle: noticia.body,
      body: noticia.body
    };
    return this._http.post(rerequestUrl, body, options).map(res => res.json()).toPromise();
  }


}


