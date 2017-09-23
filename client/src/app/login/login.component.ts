import { Component } from "@angular/core";

import { AuthenticationService } from "../services/authentication.service";

@Component({
    selector: "gh-login",
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    usernameOrEmail: string;
    password: string;

    constructor(private authenticationService: AuthenticationService) { }

    logIn(): void {
        this.authenticationService.authenticate(
            this.usernameOrEmail,
            this.password);
    }
}
