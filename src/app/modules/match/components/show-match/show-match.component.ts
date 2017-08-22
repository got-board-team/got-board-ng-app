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

    constructor(private activatedRoute: ActivatedRoute, private matchService:MatchService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.match = this.matchService.find(params['id']);
        });
    }

    onItemDrop(e: any) {
        // Get the dropped data here
        //this.droppedItems.push(e.dragData);
        console.log('Dropped');
        console.log(e.dragData);
    }

}
