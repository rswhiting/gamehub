import { Component } from "@angular/core";

import { Event } from "../models/event";
import { EventService } from "../services/event.service";
import { Game } from "../models/game";

@Component({
    selector: "gh-home",
    styleUrls: ["./home.component.css"],
    templateUrl: "./home.component.html"
})
export class HomeComponent {
    events: Event[] = [];

    constructor(private eventService: EventService) {
        this.getEvents();
    }

    getEvents(): void {
        this.eventService.getEvents().subscribe(value => console.log(value), error => console.log(error));
    }

    doIt(): void {
        let game: Game = {
            name: "Avalon",
            minPlayers: 5,
            maxPlayers: 10,
            minTime: 30,
            maxTime: 90
        };
        let event: Event = {
            game: game,
            location: "Enterprise",
            startTime: new Date(),
            endTime: new Date()
        };

        this.eventService.putEvent(event)
            .subscribe(() => this.getEvents());
    }
}
