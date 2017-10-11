import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";

import { Event } from "../models/event";
import { EventService } from "../services/event.service";
import { Game } from "../models/game";

@Component({
    templateUrl: "./new-event-dialog.component.html"
})
export class NewEventDialogComponent {
    newEvent: Event = {
        _id: undefined,
        game: {
            name: "",
            minPlayers: 1,
            maxPlayers: 10
        },
        location: "",
        time: undefined,
        isCreator: undefined
    };
    time = "12:00";

    constructor(
        private eventService: EventService,
        private dialogRef: MatDialogRef<NewEventDialogComponent>) { }

    createEvent(): void {
        const splitTime = this.time.split(":");

        this.newEvent.time = new Date();
        this.newEvent.time.setHours(
            parseInt(splitTime[0], 10),
            parseInt(splitTime[1], 10));
        this.dialogRef.close(this.newEvent);
    }
}
