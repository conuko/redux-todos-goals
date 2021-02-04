import API from 'goals-todos-api';

// ACTIONS:
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// ACTION CREATORS:
function addTodo (todo) {
    return {
        type: ADD_TODO,
        todo,
    };
}
function removeTodo (id) {
    return {
        type: REMOVE_TODO,
        id,
    };
}
function toggleTodo (id) {
    return {
        type: TOGGLE_TODO,
        id
    };
}

// ASYNCHRONOUS ACTION CREATORS (THUNK):
export function handleAddTodo (name, callBackFunction) {
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                dispatch(addTodo(todo));
                callBackFunction();
            })
            .catch(() => {
                alert('There was an error. Try again.');
            })
    }
}

// redux THUNK function for storing the API call to delete a todo
// and gives us the ability to return functions from our action creators
export function handleDeleteTodo (todo) {
    return (dispatch) => {
        dispatch(removeTodo(todo.id));

        return API.deleteTodo(todo.id)
            .catch(() => {
                dispatch(addTodo(todo));
                alert('An error occurred. Try again!');
            })
    } 
}

export function handleToggle (id) {
    return (dispatch) => {
        dispatch(toggleTodo(id));

    return API.saveTodoToggle(id)
        .catch(() => {
            dispatch(toggleTodo(id));
            alert('An error occurred. Try again!');
        })
    }
}