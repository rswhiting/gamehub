import { Component } from "@angular/core";

import { AuthenticationService } from "../services/authentication.service";

@Component({
    selector: "mwng-login",
    templateUrl: "./login.component.html"
})
export class LoginComponent {
    email: string;
    password: string;

    constructor(private authenticationService: AuthenticationService) { }

    logIn(): void {
        this.authenticationService.authenticate(this.email, this.password);
    }
}
