import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';

import {User} from 'src/app/model'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private readonly baseUrl = 'http://5.101.123.79:8085';

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private token: TokenStorageService, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }


  login(login: string, password: string) {
    const formData = new FormData();
    formData.append('username', login);
    formData.append('password', password);

    return this.http.post(`${this.baseUrl}/login`, formData, {
      observe: 'response'
    });
  }

  registration(login: string, password: string) {
    return this.http.post(`${this.baseUrl}/api/user/registration`, {
      login,
      password
    }, {
      responseType: 'text'
    });
  }

  addCredentional(token: string) {
    console.log("Try to add credentionals")
    let headers = new HttpHeaders({ "Authorization" : "bearer "+token});
    this.http.get<User>(`${this.baseUrl}/api/user/get`, {headers: headers}).subscribe( 
      user => {localStorage.setItem('curentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      this.token.addCredentioanl(user);
      console.log("current subject:")
      console.log(this.currentUserSubject)
      return user;
    })
      
  }

  getCredentional(): BehaviorSubject<User> {
    console.log(this.currentUserSubject)
    return this.currentUserSubject;
  }



  logout() {
    localStorage.removeItem('curentUser');
    this.token.deleteToken();
    this.token.removeCredentional()
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login'])
  }
}
