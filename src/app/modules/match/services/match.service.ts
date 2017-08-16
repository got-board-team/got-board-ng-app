import { Injectable } from '@angular/core';
import { Match } from '../models/match';

@Injectable()
export class MatchService {

    matches: Array<Match> = [];

    constructor() {
    }

    all() {
        return this.matches;
    }

    create() {
        let id = this.matches.length + 1;
        let match = new Match({id: id});
        this.matches.push(match);
    }

    find(id) {
        return this.matches.filter((match) => match.id == id)[0];
    }

}
