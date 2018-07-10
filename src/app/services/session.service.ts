import { GLOBAL } from './global';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class SessionService {
    routeFull = '';
    constructor(private router: Router, private activatedRoute: ActivatedRoute, public http: HttpClient) {
    }

    public verifyToken() {
        if (!localStorage.getItem('token')) {
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
        } else {
            this.routeFull = GLOBAL.urlApi + 'verifyToken';
            this.http.get(this.routeFull, {headers: this.addHeader(), observe: 'response'}).subscribe(
                result => {
                    this.updateHeader(result);
                },
                error => {
                  console.log(error.error.error, 'error');
                  this.notSession();
                }
              );
        }
    }
    addHeader() {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `${token}`); // contiene el Bearer "CODE"
        return headers;
    }
    updateHeader(result) {
        localStorage.setItem('token', `Bearer ${result.headers.get('Authorization')}`);
    }
    notSession() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
    // login(data) {
    //     localStorage.setItem('token', data.headers.Authorization);
    //     if (this.activatedRoute.snapshot.queryParams['returnUrl'] !== ''
    //         && this.activatedRoute.snapshot.queryParams['returnUrl'] !== 'undefined'
    //         && this.activatedRoute.snapshot.queryParams['returnUrl'] != null ) {
    //         this.router.navigate([this.activatedRoute.snapshot.queryParams['returnUrl']]);
    //     } else {
    //     this.router.navigate(['/']);
    // }
    // }
}
