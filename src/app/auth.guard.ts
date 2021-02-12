import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private token: TokenStorageService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const notAuth = route.data.notAuth;
    console.log("Auth guard")
    if(this.token.isAuthenticated()) {
      return true;
    }

    this.router.navigate(["/auth/login"])
    return false;
    // return notAuth ? !this.token.isAuthenticated() : this.token.isAuthenticated();
  }

}
