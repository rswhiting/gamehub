import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

import { Event } from "../models/event";

@Injectable()
export class EventService {
    private static readonly BASE_URI = "https://gamehub-rswhiting.c9users.io:8081/";
    
    constructor(private http: HttpClient) { }

    getEvents(): Observable<Object> {
        return this.http.get(EventService.BASE_URI + "event");
    }

    putEvent(event: Event): Observable<Object> {
        return this.http.put(EventService.BASE_URI + "event", event);
    }

    deleteEvent(event: Event): Observable<Object> {
        return this.http.delete(EventService.BASE_URI + "event?id=" + event._id);
    }
}
