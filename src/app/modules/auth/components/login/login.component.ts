import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user: User;

    constructor(public auth: AuthService, private titleService: Title) { }

    ngOnInit() {
        this.titleService.setTitle('DashBid Apps | Login');

        if (this.authenticated()) {
            if (this.auth.user) {
                this.user = this.auth.user;
            } else {
                this.auth.getProfile((err, user) => {
                    this.user = user;
                });
            }
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
