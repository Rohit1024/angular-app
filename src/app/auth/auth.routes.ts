import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'signin',
    loadComponent: () => import('./components/signin.component')
      .then(m => m.SigninComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./components/signup.component')
      .then(m => m.SignupComponent)
  }
];