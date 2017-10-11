import { Game } from "./game";

export class Event {
    _id: string;
    game: Game;
    location: string;
    time: Date;
    isCreator: boolean;
}
