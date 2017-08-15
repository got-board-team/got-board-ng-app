import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ROUTES } from './auth.routes';

import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { CallbackComponent } from './components/callback/callback.component';

@NgModule({
    declarations: [LoginComponent, CallbackComponent],
    imports: [RouterModule.forRoot(ROUTES), CommonModule],
    exports: [LoginComponent, CallbackComponent],
    providers: [AuthService, Title]
})
export class AuthModule {

}
