import {START_NEW_GAME, TO_CURRENT_GAMES, TO_SETTINGS} from "./actionTypes"

export const startNewGame = () => ({
   type: START_NEW_GAME,
    payload: {}
});

export const toCurrentGames = () => ({
    type: TO_CURRENT_GAMES,
    payload: {}
});

export const toSettings = () => ({
   type: TO_SETTINGS,
   payload: {}
});
