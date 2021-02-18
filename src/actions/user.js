import * as actionTypes from './actionTypes';

export const saveUser = value => ({
    type: actionTypes.SAVE_USER,
    user: value
})

export const clearUser = _ => ({
    type: actionTypes.CLEAR_USER,
    user: ""
})