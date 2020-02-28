import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildActiveGuard implements CanActivateChild  {
  id: number;
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.id = childRoute.params.id;
    if (this.id) {
      console.log('id present' + this.id);
      alert('child route activated');
      return true;
    }
    return false;
  }
}
