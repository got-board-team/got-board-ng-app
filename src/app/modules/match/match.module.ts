import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ROUTES } from './match.routes';

import { MatchService } from './services/match.service';
import { ListMatchesComponent } from './components/list-matches/list-matches.component';

@NgModule({
    declarations: [ListMatchesComponent],
    imports: [RouterModule.forRoot(ROUTES), CommonModule],
    exports: [ListMatchesComponent],
    providers: [MatchService, Title]
})
export class MatchModule {

}
