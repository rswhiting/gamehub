import { Component } from "@angular/core";

import { UserService } from "../services/user.service";

@Component({
    selector: "gh-register",
    templateUrl: "./register.component.html"
})
export class RegisterComponent {
    username: string;
    email: string;
    password: string;

    constructor(private userService: UserService) { }

    register(): void {
        this.userService.register(this.username, this.email, this.password)
            .subscribe(() => { console.log("Success!") }, error => { console.log("Error!"); });
    }
}
