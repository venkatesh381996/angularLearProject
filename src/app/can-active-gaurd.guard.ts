import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CanActiveGaurdGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    alert('guard activated');
    return true;
  }
}
