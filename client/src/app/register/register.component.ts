import { Component } from "@angular/core";
import { MdSnackBar } from "@angular/material";

import { UserService } from "../services/user.service";

@Component({
    selector: "gh-register",
    templateUrl: "./register.component.html"
})
export class RegisterComponent {
    username: string;
    email: string;
    password: string;

    constructor(
        private snackBar: MdSnackBar,
        private userService: UserService) { }

    register(): void {
        this.userService.register(this.username, this.email, this.password)
            .subscribe(
            () => { },
            error => {
                this.snackBar.open(error.error, "Dismiss");
            });
    }
}
