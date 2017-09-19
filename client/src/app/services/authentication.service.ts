import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    authenticate(email: string, password: string): void {
        this.http
            .post("http://localhost:8080/login", {
                email: email,
                password: password
            })
            .subscribe();
    }
}
