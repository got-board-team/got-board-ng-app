import { Injectable } from '@angular/core';
import { Match } from '../models/match';
import { User } from '../../auth/models/user';

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

    find(id:number) {
        return this.matches.filter((match) => match.id == id)[0];
    }

    join(id:number, userEmail:string) {
        let user = this.findUser(userEmail);
        this.find(id).spectators.push(user);
    }

    findUser(email) {
        return new User({email: email});
    }

}
