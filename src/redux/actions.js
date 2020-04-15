import {START_NEW_GAME, TO_CURRENT_GAMES, TO_SETTINGS, GO_BACK, SELECT_PLAYER} from "./actionTypes"

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

export const goBack = (toUrl) => ({
   type: GO_BACK,
    payload: {newUrl: toUrl}
});

export const selectPlayer = (playerId) => ({
   type: SELECT_PLAYER,
   payload: {playerId: playerId}
});
