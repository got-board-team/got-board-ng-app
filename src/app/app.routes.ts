import { Routes } from '@angular/router';

export const ROUTES:Routes = [
  { path: '',
    redirectTo: '/matches',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/matches',
    pathMatch: 'full'
  },
];
