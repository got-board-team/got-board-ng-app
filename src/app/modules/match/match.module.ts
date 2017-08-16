import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ROUTES } from './match.routes';

import { AuthModule } from '../auth/auth.module';

import { MatchService } from './services/match.service';

import { ListMatchesComponent } from './components/list-matches/list-matches.component';
import { ShowMatchComponent } from './components/show-match/show-match.component';

const COMPONENTS = [ListMatchesComponent, ShowMatchComponent];
const SERVICES = [MatchService, Title];

@NgModule({
    declarations: COMPONENTS,
    imports: [RouterModule.forRoot(ROUTES), CommonModule, AuthModule],
    exports: COMPONENTS,
    providers: SERVICES
})
export class MatchModule {

}
