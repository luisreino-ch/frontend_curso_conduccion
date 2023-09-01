import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {  }
  
  async canActivate(): Promise<boolean> {
    if (!this.authService.isAuth()) {
      console.log('Token no es válido o ya expiró');
      this.router.navigate(['loginfin']);
      return false;
    }
    return true;
  }
}

export function authGuardFactory(authService: AuthService, router: Router): () => Promise<boolean> {
  return async () => {
    if (!authService.isAuth()) {
      console.log('Token no es válido o ya expiró');
      router.navigate(['loginfin']);
      return false;
    }
    return true;
  };
}
