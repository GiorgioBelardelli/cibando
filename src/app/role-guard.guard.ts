import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';
import { UserService } from './services/user.service';

export const roleGuardGuard: CanActivateFn = (route, state) => {
  // return inject(UserService).user.role ?  true : inject(Router).navigateByUrl('/home');

  return JSON.parse(localStorage.getItem('user')).role === "admin" ? true : inject(Router).navigateByUrl('/home');
};


