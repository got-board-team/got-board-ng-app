import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-callback',
    templateUrl: './callback.component.html',
    styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

    constructor(public auth: AuthService, private titleService: Title) {
        console.log('callback constructor');
        auth.handleAuthentication();
    }

    ngOnInit() {
    }

}
