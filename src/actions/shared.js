import API from 'goals-todos-api';

// ACTIONS:
export const RECEIVE_DATA = 'RECEIVE_DATA';

// ACTION CREATORS:
function receiveData (todos, goals) {
    return {
        type: RECEIVE_DATA,
        todos,
        goals,
    };
}

// ASYNCHRONOUS ACTION CREATORS:
export function handleInitialData () {
    return (dispatch) => {
        return Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
        ]).then(([ todos, goals ]) => {
            dispatch(receiveData(todos, goals));
        });
    }
}