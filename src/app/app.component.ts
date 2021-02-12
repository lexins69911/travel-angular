import { Component } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import * as migration from '../assets/migration.json';
import { TokenStorageService } from './token-storage.service';
import {LoginComponent} from "src/app/auth/login/login.component"
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'travel-agency';

  constructor(private storage: TokenStorageService) {
    
  }

}
