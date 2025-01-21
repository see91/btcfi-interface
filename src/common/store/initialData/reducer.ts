import {
    SET_INITIAL_DATA,
    fetchInitialDataAction
} from './actions';

export type initialState = {
};

const INITIAL_STATE: initialState = {
};

type initialDataReducerAction = fetchInitialDataAction;

export function initialDataReducer(
    state: initialState = INITIAL_STATE,
    action: initialDataReducerAction
): initialState {
    switch (action.type) {
        case SET_INITIAL_DATA: {
            return {
                ...state,
                ...action.payload.data,
            };
        }
        default:
            return state;
    }
}
