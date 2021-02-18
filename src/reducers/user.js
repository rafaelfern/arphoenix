import * as actionTypes from '../actions/actionTypes';

const initialState = {
    user: '',
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_USER:
            return {
                ...state,
                user: action.user
            };
        case actionTypes.CLEAR_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}