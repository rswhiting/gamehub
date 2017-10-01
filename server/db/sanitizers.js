"use strict";

module.exports.sanitizeEvent = sanitizeEvent;
module.exports.sanitizeGame = sanitizeGame;

function sanitizeEvent(event) {
    return {
        game: sanitizeGame(event.game),
        location: event.location,
        time: event.time
    };
}

function sanitizeGame(game) {
    return {
        name: game.name,
        minPlayers: game.minPlayers,
        maxPlayers: game.maxPlayers,
        minTime: game.minTime,
        maxTime: game.maxTime
    }
}