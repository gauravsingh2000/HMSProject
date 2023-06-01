import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminRouteGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const email=sessionStorage.getItem("email") || null;
      const password=sessionStorage.getItem("password") || null;
      if(email && password) {
        // if user loggedin then return true
        console.log(`${email}, and password: ${password}`);
        return true;
      } else {
        // if user not loggedin then return false
        this.router.navigate(['/admin']);
        return false
      }
  }
  
}
