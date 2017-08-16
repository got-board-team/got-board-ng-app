import { Injectable } from '@angular/core';
import { Match } from '../models/match';

const MATCHES = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5}
];

@Injectable()
export class MatchService {

    constructor() { }

    all() {
        return MATCHES.map((matchAttributes) => new Match(matchAttributes));
    }

}
