import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

    public token;
    public baseUrl;

    constructor() {
        this.token = 'salkdfj';
        this.baseUrl = document.location.origin;
    }
}
