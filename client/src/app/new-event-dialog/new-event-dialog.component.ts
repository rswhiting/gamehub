import { Component } from "@angular/core";
import { MdDialogRef } from "@angular/material";

import { Event } from "../models/event";
import { EventService } from "../services/event.service";
import { Game } from "../models/game";

@Component({
    templateUrl: "./new-event-dialog.component.html"
})
export class NewEventDialogComponent {
    newEvent: Event = {
        game: {
            name: "",
            minPlayers: 1,
            maxPlayers: 10
        },
        location: "",
        time: undefined
    };
    time: string = "12:00";

    constructor(
        private eventService: EventService,
        private dialogRef: MdDialogRef<NewEventDialogComponent>) { }

    createEvent(): void {
        let splitTime = this.time.split(":");

        this.newEvent.time = new Date();
        this.newEvent.time.setHours(
            parseInt(splitTime[0], 10),
            parseInt(splitTime[1], 10));
        this.dialogRef.close(this.newEvent);
    }

    isValid(): boolean {
        return this.newEvent.game.name.length > 0
            && this.newEvent.game.minPlayers > 0
            && this.newEvent.game.minPlayers <= this.newEvent.game.maxPlayers
            && this.newEvent.location.length > 0;
    }
}
