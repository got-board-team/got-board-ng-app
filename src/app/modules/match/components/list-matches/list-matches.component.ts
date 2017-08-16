import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match';

@Component({
    selector: 'app-list-matches',
    templateUrl: './list-matches.component.html',
    styleUrls: ['./list-matches.component.css']
})
export class ListMatchesComponent implements OnInit {

    matches:Array<Match>;

    constructor(private matchService:MatchService) { }

    ngOnInit() {
        this.matches = this.matchService.all();
    }

}
