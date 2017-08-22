import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match';

@Component({
    selector: 'app-show-match',
    templateUrl: './show-match.component.html',
    styleUrls: ['./show-match.component.css']
})
export class ShowMatchComponent implements OnInit {

    match: Match;
    areas = [ {name: 'winterfel', units: []},
              {name: 'lannisport', units: []},
              {name: 'dragonstone', units: []},
              {name: 'pike', units: []},
              {name: 'highgardens', units: []},
              {name: 'sunspear', units: []} ];
    units = ['footman', 'knight', 'siege'];

    constructor(private activatedRoute: ActivatedRoute, private matchService: MatchService, public router: Router) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            if (this.matchService.matches.length === 0) {
                return this.router.navigate(['/matches']);
            } else {
                this.match = this.matchService.find(params['id']);
            }
        });
    }

    onItemDrop(e: any, area: any) {
        console.log('Dropped unit: ', e.dragData);
        area.units.push(e.dragData);
        console.log('In area: ', area);
    }

    unitCount(area: any, unitType: string) {
        return area.units.filter((u) => (u === unitType)).length;
    }

}
