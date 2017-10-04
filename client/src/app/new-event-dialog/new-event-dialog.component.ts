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
        time: new Date()
    };

    constructor(
        private eventService: EventService,
        private dialogRef: MdDialogRef<NewEventDialogComponent>) { }

    doIt(): void {
        let game: Game = {
            name: "Avalon",
            minPlayers: 5,
            maxPlayers: 10
        };
        let event: Event = {
            game: game,
            location: "Enterprise",
            time: new Date()
        };

        this.dialogRef.close(event);
    }
}
