import { Component } from "@angular/core";
import { GameService } from "../services/game.service";

@Component({
    selector: "gh-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent {
    constructor(private gameService: GameService) { }

    doIt(): void {
        this.gameService.postNewGame("Avalon", 5, 10, 30, 60).subscribe();
    }
}
