import {START_NEW_GAME} from '../actionTypes'

const initialState = {
    isGameStarted: false
};

export default  function (state = initialState, action) {
    switch (action.type) {
        case START_NEW_GAME: {
            return {
                ...state,
                isGameStarted: true
            };
        }
        default:
            return state;

    }

}
