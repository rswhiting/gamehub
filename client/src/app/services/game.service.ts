import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

import { Game } from "../models/game";

@Injectable()
export class GameService {
    constructor(private http: HttpClient) { }

    putGame(game: Game): Observable<Object> {
        return this.http.put("http://localhost:8080/game", game);
    }
}
