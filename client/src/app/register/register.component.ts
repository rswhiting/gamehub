import { Component } from "@angular/core";

import { AuthenticationService } from "../services/authentication.service";

@Component({
    selector: "mwng-register",
    templateUrl: "./register.component.html"
})
export class RegisterComponent {
    constructor(private authenticationService: AuthenticationService) { }
}
