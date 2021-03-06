import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

import { AuthModule } from './modules/auth/auth.module';
import { MatchModule } from './modules/match/match.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, {useHash: false}),
        AuthModule,
        MatchModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
