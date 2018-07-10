import { SessionService } from './../../services/session.service';
import { Component } from '@angular/core';
import { Session } from 'protractor';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
  })
  export class AdminComponent {
    public dateNow: any;
    public loading: boolean;
    constructor(private _sessionService: SessionService) {
      this.dateNow =  Date.now();
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
      this._sessionService.verifyToken();
    }
    logout() {
      this._sessionService.logout();
    }
   }
