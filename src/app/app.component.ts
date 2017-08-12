import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Game of Thrones Online Board Game';

    constructor(private titleService: Title){
    }

    ngOnInit() {
        console.log("\nStarted application with API_ENV: " + process.env.API_ENV);
        console.log("Using API endpoint: " + process.env.API_ENDPOINT);
        console.log("Auth0 Domain:" + process.env.DOMAIN);
        console.log("APP_VERSION: " + process.env.APP_VERSION + "\n\n");
        this.titleService.setTitle('Game of Thrones Online Board Game');
    }
}
