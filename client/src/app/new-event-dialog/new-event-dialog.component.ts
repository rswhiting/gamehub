import { Component } from "@angular/core";
import { MdDialogRef } from "@angular/material";

import { Event } from "../models/event";
import { EventService } from "../services/event.service";
import { Game } from "../models/game";

@Component({
    templateUrl: "./new-event-dialog.component.html"
})
export class NewEventDialogComponent {
    constructor(
        private eventService: EventService,
        private dialogRef: MdDialogRef<NewEventDialogComponent>) { }

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

        // TODO: return this data to HomeComponent
        this.dialogRef.close(event);
    }
}
