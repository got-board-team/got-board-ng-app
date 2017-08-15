import { Routes } from '@angular/router';

export const ROUTES:Routes = [
  { path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
];
