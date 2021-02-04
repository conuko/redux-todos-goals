import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggle
} from '../actions/todos';

class Todos extends React.Component {
    addItem = (event) => {
        const { dispatch } = this.props;
        event.preventDefault();

        dispatch(handleAddTodo(
            this.input.value,
            // callback function that, when it's invoced, will reset the input value to an empty string:
            () => this.input.value = ''
        ));
        };

    removeItem = (todo) => {
        const { dispatch } = this.props;
        // dispatch calls the thunk function "handleDeleteTodo:"
        dispatch(handleDeleteTodo(todo));
    };

    toggleItem = (id) => {
        const { dispatch } = this.props;

        dispatch(handleToggle(id));
    };

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input
                    type='text'
                    placeholder='Add Todo'
                    ref={(input) => this.input = input}
                />
                <button onClick={this.addItem}>Add Todo</button>
                <List
                    items={this.props.todos}
                    remove={this.removeItem}
                    toggle={this.toggleItem}
                />
            </div>
        )
    };
};

export default connect((state) => ({
    todos: state.todos
}))(Todos);