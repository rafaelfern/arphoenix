import { createStore } from 'redux';
import { Reducers } from '../reducers';
import { loadState, saveState } from '../localStorage';

const persistedState = loadState();

export const Store = createStore(
    Reducers,
    persistedState
);

Store.subscribe(() => {
    saveState(Store.getState());
})
