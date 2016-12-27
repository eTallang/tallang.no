import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ApiService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    api_url: string = 'http://localhost:3500';

    constructor(private http: Http) {

    }

    // get(path: string):  Observable<any> {
    //     return this.http.get();
    // }
}