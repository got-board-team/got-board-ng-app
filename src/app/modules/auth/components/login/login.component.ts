import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    profile: any;

    constructor(public auth: AuthService, private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle('DashBid Apps | Login');

        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        } else {
            this.auth.getProfile((err, profile) => {
                this.profile = profile;
            });
        }
    }

    authenticated() {
        return this.auth.isAuthenticated();
    }

    login() {
        this.auth.login();
    }

    logout() {
        this.auth.logout();
    }

}
