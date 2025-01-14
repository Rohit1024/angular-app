import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      loadComponent: () => import('./components/dashboard.component')
        .then(m => m.DashboardComponent)
    },
    {
      path: 'docs',
      loadComponent: () => import('./components/docs.component')
        .then(m => m.DocsComponent)
    },
    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.routes')
        .then(m => m.AUTH_ROUTES)
    }
  ];
