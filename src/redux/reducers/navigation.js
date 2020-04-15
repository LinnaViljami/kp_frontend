import {START_NEW_GAME, TO_SETTINGS, TO_CURRENT_GAMES, GO_BACK} from '../actionTypes'
import history from './../../history';

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
            history.push('/esa')
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
        case GO_BACK:
            let newUrl = action.payload.newUrl;

            if(newUrl == null){
                console.log(newUrl);
                history.push("/");
            }
            else {
                console.log("no undefined", newUrl);
                history.push(action.payload.newUrl);
            }
            return state;
        default:
            return state;

    }

}


