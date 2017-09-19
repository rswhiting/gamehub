import { Component } from "@angular/core";

import { UserService } from "../services/user.service";

@Component({
    selector: "mwng-register",
    templateUrl: "./register.component.html"
})
export class RegisterComponent {
    email: string;
    name: string;
    password: string;

    constructor(private userService: UserService) { }

    register(): void {
        this.userService.register(
            this.email,
            this.password,
            this.name);
    }
}
