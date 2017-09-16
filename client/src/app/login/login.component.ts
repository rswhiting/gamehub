import { Component } from "@angular/core";

@Component({
    selector: "mwng-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    email: string;
    password: string;

    logIn(): void {
        console.log(this);
    }
}
