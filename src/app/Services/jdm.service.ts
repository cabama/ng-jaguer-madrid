import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class JDMService {
    public url: string;
    public requestUrlRanking: string;
    private requestUrlCalendar: string;
    private storageRanking = 'jaguerClasificacion';

    constructor(private _http: Http) {
        // this.url = GLOBAL.url;
        this.url = document.location.origin + '/api';
        this.requestUrlRanking = this.url + '/data/ranking';
        this.requestUrlCalendar = this.url + '/data/calendar';
    }

    getRangkingStorage () {
        return JSON.parse(localStorage.getItem(this.storageRanking));
    }

    setRankingStorage(value) {
        localStorage.setItem(this.storageRanking, JSON.stringify(value));
    }

    getRanking(): Promise<any> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.get(this.requestUrlRanking, { headers: headers }).map(res => res.json()).toPromise();
    }

    getCalendar(): Promise<any[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this._http.get(this.requestUrlCalendar, { headers: headers }).map(res => res.json()).toPromise();
    }



}


