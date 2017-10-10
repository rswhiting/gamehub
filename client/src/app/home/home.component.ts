import { Component } from "@angular/core";
import { MdDialog } from "@angular/material";
import "rxjs/add/operator/filter";

import { Event } from "../models/event";
import { EventService } from "../services/event.service";
import { Game } from "../models/game";
import { NewEventDialogComponent } from "../new-event-dialog/new-event-dialog.component";

@Component({
    selector: "gh-home",
    styleUrls: ["./home.component.css"],
    templateUrl: "./home.component.html"
})
export class HomeComponent {
    events: Event[] = [];

    constructor(private eventService: EventService, private dialog: MdDialog) {
        this.getEvents();
    }

    getEvents(): void {
        this.eventService.getEvents()
            .subscribe((events: Event[]) => this.events = events);
    }

    openNewEventDialog(): void {
        const dialogReference = this.dialog.open(
            NewEventDialogComponent,
            {
                width: "600px"
            });
        dialogReference.beforeClose()
            .filter(result => result)
            .subscribe(newEvent => this.putEvent(newEvent));
    }

    putEvent(event: Event): void {
        this.eventService.putEvent(event).subscribe(() => this.getEvents());
    }
}
