import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { AuthService } from '../../../auth/services/auth.service';
import { Match } from '../../models/match';

@Component({
    selector: 'app-list-matches',
    templateUrl: './list-matches.component.html',
    styleUrls: ['./list-matches.component.css']
})
export class ListMatchesComponent implements OnInit {

    matches:Array<Match>;

    constructor(private matchService: MatchService, private auth: AuthService) { }

    ngOnInit() {
        this.matches = this.matchService.all();
    }

    create() {
        this.matchService.create();
    }

    authenticated() {
        return this.auth.isAuthenticated();
    }

    join(id) {
        let user = this.auth.user;
        this.matchService.join(id, this.auth.user.email);
    }

}
