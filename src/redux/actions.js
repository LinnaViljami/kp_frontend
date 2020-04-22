import {START_NEW_GAME, TO_CURRENT_GAMES, TO_SETTINGS, GO_BACK, SELECT_PLAYER, FETCH_USERS} from "./actionTypes"
import axios from 'axios';

export function startNewGame() {
    return (dispatch) => {
        dispatch(startCreatingNewGame());
        dispatch(fetchUsers());

    }
};

export const startCreatingNewGame = () => ({
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


export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: axios.get('/users')
});
