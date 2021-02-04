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
            <div className="p-12">
                <h1 className="uppercase block text-gray-700 text-sm font-bold mb-2">
                Todos
                </h1>
                <div className='flex items-center justify-between relative'>
                    <input
                        name="field_name"
                        className="p-4 pr-20 py-2 border-2 border-gray-200 rounded bg-grey-200 text-gray-600 w-full leading-tight shadow-md focus:outline-none focus:bg-white focus:border-blue-300"                        
                        type='text'
                        placeholder='Add Todo'
                        ref={(input) => this.input = input}
                    />
                    <button 
                    className="text-blue-900 hover:text-blue-500 bg-white font-semibold py-1 px-2 absolute right-0 mr-2 focus:outline-none"
                    onClick={this.addItem}>
                        Add
                    </button>
                </div>
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