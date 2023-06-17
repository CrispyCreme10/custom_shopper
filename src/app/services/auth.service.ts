import { Injectable, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor() { }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}

export function authGuard(): CanActivateFn {
  return () => {
    const authService: AuthService = inject(AuthService);

    return authService.isAuthenticated();
  }
}