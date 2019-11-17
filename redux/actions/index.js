import {
    GET_TASKS,
    SORT_BY,
    DIRECTION,
    CURRENT_PAGE,
} from '../constants/action-types';

function setPage(page) {
    return {
        type: CURRENT_PAGE,
        payload: page,
    };
}

function setTasks(tasks, pages) {
    return dispatch => {
        dispatch({
            type: GET_TASKS,
            payload: { tasks, pages },
        });
    };
}

function setDirection(filter) {
    return {
        type: DIRECTION,
        payload: filter,
    };
}

function sortBy(filter) {
    return {
        type: SORT_BY,
        payload: filter,
    };
}

export { setPage, setTasks, setDirection, sortBy };


