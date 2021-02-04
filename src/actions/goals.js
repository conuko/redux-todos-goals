import API from 'goals-todos-api';

// ACTION:
export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

// ACTION CREATORS:
function addGoal (goal) {
    return {
        type: ADD_GOAL,
        goal,
    };
}
function removeGoal (id) {
    return {
        type: REMOVE_GOAL,
        id,
    };
}

// ASYNCHRONOUS ACTION CREATORS (THUNK):
export function handleAddGoal (name, callBackFunction) {
    return (dispatch) => {
        return API.saveGoal(name)
            .then((goal) => {
                dispatch(addGoal(goal));
                callBackFunction();
            })
            .catch(() => alert('There was an error. Try again!'));
    }
}

export function handleDeleteGoal (goal) {
    return (dispatch) => {
        dispatch(removeGoal(goal.id));

    return API.deleteGoal(goal.id)
        .catch(() => {
            dispatch(addGoal(goal));
            alert('An error occurred. Try again.');
        })
    }
}