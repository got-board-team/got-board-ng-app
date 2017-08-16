import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CallbackComponent } from './components/callback/callback.component';

export const ROUTES:Routes = [
    {path: 'callback', component: CallbackComponent}
];
