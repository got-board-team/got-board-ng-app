import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ROUTES } from './match.routes';

import { MatchService } from './services/match.service';
import { ListMatchesComponent } from './components/list-matches/list-matches.component';
import { ShowMatchComponent } from './components/show-match/show-match.component';

@NgModule({
    declarations: [ListMatchesComponent, ShowMatchComponent],
    imports: [RouterModule.forRoot(ROUTES), CommonModule],
    exports: [ListMatchesComponent, ShowMatchComponent],
    providers: [MatchService, Title]
})
export class MatchModule {

}
