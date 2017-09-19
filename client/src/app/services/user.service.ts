import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    register(email: string, password: string, name: string): void {
        this.http
            .post("http://localhost:8080/register", {
                email: email,
                password: password,
                name: name
            })
            .subscribe();
    }
}
