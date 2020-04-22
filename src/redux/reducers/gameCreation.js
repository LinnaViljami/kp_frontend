import {SELECT_PLAYER, FETCH_USERS} from './../actionTypes'
import {rejected, fulfilled, pending} from './../../entity/asyncActions'
const initialState = {
    fetching: false,
    fetched: false,
    players : [],
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SELECT_PLAYER: {
            const playerIndex = state.players.findIndex((playerData) => playerData.id === action.payload.playerId);
            return {
                ...state,
                players: state.players.map(
                    (player, i) => i === playerIndex ?
                    {
                        ...player,
                        selected: !state.players[playerIndex].selected
                    } : player
                )
            };
        }
        case pending(FETCH_USERS): {
            return {
                ...state,
                fetching: true,
                fetched: false,
                error: null
            }
        }
        case rejected(FETCH_USERS): {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            }
        }
        case fulfilled(FETCH_USERS): {
            return {
                ...state,
                fetching: false,
                fetched: true,
                players: action.payload.data
            }
        }
        default:
            return state;
    }
}

