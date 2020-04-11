import {START_NEW_GAME, TO_SETTINGS, TO_CURRENT_GAMES} from '../actionTypes'

export const windowDescriptions = {
    mainMenu: "Valikko",
    settings: "Asetukset",
    currentGames: "Jatka peliä",
    newGame: "Uusi peli"
};

const initialState = {
    currentWindow: "mainMenu"
};

export default function (state = initialState, action) {
    switch (action.type) {
        case START_NEW_GAME: {
            return {
                ...state,
                currentWindow: "newGame"
            };
        }
        case TO_SETTINGS: {
            return {
                ...state,
                currentWindow: "settings"
            }
        }
        case TO_CURRENT_GAMES: {
            return {
                ...state,
                currentWindow: "currentGames"
            }
        }
        default:
            return state;

    }

}


