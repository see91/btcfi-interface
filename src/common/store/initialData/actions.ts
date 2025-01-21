import { action } from 'typesafe-actions';
export const SET_INITIAL_DATA = '[Request] Set Initial Data';

export const fetchInitialData = (): any => {
    return async (dispatch: any) => {
        try {
            dispatch(action(SET_INITIAL_DATA, { data: {  } }));
        } catch (error) {
            console.error('Error fetching data:', error);
            dispatch(action(SET_INITIAL_DATA, { data: {  } }));
        }
    };
};

export type fetchInitialDataAction = ReturnType<typeof fetchInitialData>;
