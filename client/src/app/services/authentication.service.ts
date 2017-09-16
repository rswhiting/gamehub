import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    authenticate(username: string, password: string): void {
        console.log(username);
        console.log(password);
    }
}
