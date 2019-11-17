import {
    GET_TASKS,
    SORT_BY,
    DIRECTION,
    CURRENT_PAGE,
} from '../constants/action-types';

export const initialState = {
    // isFetching: false,
    tasks: [],
    sortBy: 'username',
    direction: 'asc',
    pages: '0',
    pagesNumber: 3,
    currentPage: 1,
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        // case GET_TASKS_REQUEST:
        //     return { ...state, isFetching: true };
        case CURRENT_PAGE:
            return {...state, currentPage: action.payload};

        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload.tasks,
                pages: action.payload.pages,
                // isFetching: false,
            };
        case DIRECTION:
            if (action.payload) {
                return {...state, direction: 'desc'};
            } else {
                return {...state, direction: 'asc'};
            }

        case SORT_BY:
            return {...state, sortBy: action.payload};


        default:
            return state;
    }
}
