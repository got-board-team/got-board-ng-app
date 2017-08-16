import { Routes } from '@angular/router';
import { ListMatchesComponent } from './components/list-matches/list-matches.component';
import { ShowMatchComponent } from './components/show-match/show-match.component';

export const ROUTES:Routes = [
    {path: 'matches', component: ListMatchesComponent},
    {path: 'matches/:id', component: ShowMatchComponent},
];
