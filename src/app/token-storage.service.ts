import { Injectable } from '@angular/core';
import { User } from './model';

const TOKEN_KEY = '[TA] auth-token';
const CRED_KEY = '[TA] credentional'

export const TOKEN_HEADER = 'Authorization';
export const INVALID_LOGIN_STATUS = 302;

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  saveToken(token: string) {
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  isAuthenticated() {
    return !!this.getToken();
  }

  deleteToken() {
    sessionStorage.removeItem(TOKEN_KEY);
  }

  addCredentioanl(user: User) {
    sessionStorage.setItem(CRED_KEY, JSON.stringify(user));
  }
  
  getCredentional(): User {
    return JSON.parse(sessionStorage.getItem(CRED_KEY));
  }

  removeCredentional() {
    sessionStorage.removeItem(CRED_KEY);
  }
}
