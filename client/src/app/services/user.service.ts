import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    register(
        username: string,
        email: string,
        password: string):
        Observable<Object> {
        return this.http
            .post("http://localhost:8080/register", {
                username: username,
                email: email,
                password: password
            });
    }
}
