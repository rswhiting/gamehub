import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Injectable()
export class GameService {
    constructor(private http: HttpClient) { }

    postNewGame(
        name: string,
        minPlayers: number,
        maxPlayers: number,
        minTime: number,
        maxTime: number):
        Observable<Object> {
        return this.http.put(
            "http://localhost:8080/game",
            {
                name: name,
                minPlayers: minPlayers,
                maxPlayers: maxPlayers,
                minTime: minTime,
                maxTime: maxTime
            });
    }
}
