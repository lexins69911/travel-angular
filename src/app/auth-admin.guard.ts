import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private token: TokenStorageService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    console.log("Admin auth guard")
    let user = this.token.getCredentional();

    if (user.role==='ROLE_ADMIN') {
        return true;
    }

    this.router.navigate(["/"])
    return false;
    // return notAuth ? !this.token.isAuthenticated() : this.token.isAuthenticated();
  }

}