import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateCheckGuard implements CanActivate  {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    alert('guard2');
    return true;
  }
}
