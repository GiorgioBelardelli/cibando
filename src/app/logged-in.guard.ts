import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const loggedInGuard: CanActivateFn = (route, state) => {

  //Se sei loggato la guardia torna true, altrimenti fa un redirect alla login
  return inject(AuthService).isLogged() ?  true : inject(Router).navigateByUrl('/login');
};
