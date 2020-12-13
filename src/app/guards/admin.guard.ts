import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  user!: Admin;
  constructor(private service: UserService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.isAdmin();
  }


  async isAdmin() {
    try {
      this.user = Object.assign(await this.service.getUser());
  
      if (this.user && (this.user.role === "admin")) {
        return true;
      } else {
        return false;
      }
    } catch {
      console.log("Admin localisation error!");
      return false;
    }
  }
}
