import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

import { Event } from "../models/event";

@Injectable()
export class EventService {
    constructor(private http: HttpClient) { }

    getEvents(): Observable<Object> {
        return this.http.get("http://localhost:8080/event");
    }

    putEvent(event: Event): Observable<Object> {
        return this.http.put("http://localhost:8080/event", event);
    }

    deleteEvent(event: Event): Observable<Object> {
        return this.http.delete("http://localhost:8080/event?id=" + event._id);
    }
}
