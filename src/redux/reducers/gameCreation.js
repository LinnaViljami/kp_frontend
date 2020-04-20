import {SELECT_PLAYER} from './../actionTypes'

const initialState = {
    players : {
        1232: {
            name: "esa",
            isSelected: true
        },
        1233: {
            name: "Jouko",
            isSelected: false
        }
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SELECT_PLAYER: {
            console.log("select player occurs with: ", state.players[action.payload.playerId].isSelected)
            return {
                ...state,
                players: {
                    ...state.players,
                    [action.payload.playerId]: {
                        ...state.players[action.payload.playerId],
                        isSelected: !state.players[action.payload.playerId].isSelected
                    }
                }
            };
        }
        default:
            return state;
    }
}

