import { RECEIVE_DATA } from '../actions/shared';
import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO
} from '../actions/todos';


// <=== reducer function for To Do's (remember: a reducer must be a PURE FUNCTION): ===>
export default function todos (state = [], action) {
    switch(action.type) {
        case ADD_TODO :
            return state.concat([action.todo]);
        case REMOVE_TODO :
            // To remove a todo item, we called filter() on the state.
            // This returns a new state (an array) with only todo items 
            // whose id's do not match the id of the todo we want to remove:
            return state.filter((todo) => todo.id !== action.id);
        case TOGGLE_TODO :
            /*
            To handle toggling a todo item, we want to change the value of the
            complete property on whatever id is passed along on the action.
            We mapped over the entire state, and if todo.id matched action.id,
            we used Object.assign() to return a new object with merged properties:
            */
            return state.map((todo) => todo.id !== action.id ? todo :
                Object.assign({}, todo, { complete: !todo.complete }))
        case RECEIVE_DATA :
            return action.todos
        default : 
            return state;
    };
}