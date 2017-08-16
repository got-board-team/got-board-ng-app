import { Injectable } from '@angular/core';
import { Match } from '../models/match';

const MATCHES = [ {id: 1}, {id: 2}, {id: 3} ];

@Injectable()
export class MatchService {

    matches: Array<Match>;

    constructor() {
        this.matches = MATCHES.map((matchAttributes) => new Match(matchAttributes));
    }

    all() {
        return this.matches;
    }

    create() {
        let id = this.matches[this.matches.length - 1].id + 1;
        let match = new Match({id: id});
        this.matches.push(match);
    }

}
