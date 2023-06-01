import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorRouteGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const username=sessionStorage.getItem("username") || null;
      const password=sessionStorage.getItem("password") || null;
      if(username && password) {
        // if user loggedin then return true
        console.log(`${username}, and password: ${password}`);
        return true;
      } else {
        // if user not loggedin then return false
        this.router.navigate(['doctor']);
        return false
      }
  }
  
}
