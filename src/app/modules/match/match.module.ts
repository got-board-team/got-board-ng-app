import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ROUTES } from './match.routes';
import { Ng2DragDropModule } from 'ng2-drag-drop';

import { AuthModule } from '../auth/auth.module';

import { MatchService } from './services/match.service';

import { ListMatchesComponent } from './components/list-matches/list-matches.component';
import { ShowMatchComponent } from './components/show-match/show-match.component';

import { DraggableDirective } from './directives/draggable/draggable.directive';
import { DroppableDirective } from './directives/droppable/droppable.directive';

const COMPONENTS_AND_DIRECTIVES = [ListMatchesComponent, ShowMatchComponent, DraggableDirective, DroppableDirective];
const SERVICES = [MatchService, Title];

@NgModule({
    declarations: COMPONENTS_AND_DIRECTIVES,
    imports: [RouterModule.forRoot(ROUTES), CommonModule, AuthModule, Ng2DragDropModule.forRoot()],
    exports: COMPONENTS_AND_DIRECTIVES,
    providers: SERVICES
})
export class MatchModule {

}
