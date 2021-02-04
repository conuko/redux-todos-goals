import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import {
    handleAddGoal,
    handleDeleteGoal,
} from '../actions/goals';


class Goals extends React.Component {
    // method for adding an item to the Goals list:
    addItem = (event) => {
        const { dispatch } = this.props;
        event.preventDefault();
        // call the thunk function "handleAddGoal":
        dispatch(handleAddGoal(
            this.input.value,
            () => this.input.value = ''
        )) 
    }
    // method for removing an item of the Goals list:
    removeItem = (goal) => {
        const { dispatch } = this.props;
        // call the thunk function "handleDeleteGoal":
        dispatch(handleDeleteGoal(goal));
    }

    render() {
        return (
            <div className="p-12">
                <h1 className="uppercase block text-gray-700 text-sm font-bold mb-2">
                Goals
                </h1>
                <div className='flex items-center justify-between relative'>
                    <input
                        name="field_name"
                        className="p-4 pr-20 py-2 border-2 border-gray-200 rounded bg-grey-200 text-gray-600 w-full leading-tight shadow-md focus:outline-none focus:bg-white focus:border-blue-300"                        
                        type='text'
                        placeholder='Add Goal'
                        ref={(input) => this.input = input}
                    />
                    <button
                    className="text-blue-900 hover:text-blue-500 bg-white font-semibold py-1 px-2 absolute right-0 mr-2 focus:outline-none"                    
                    onClick={this.addItem}>
                        Add
                    </button>
                </div>


                <List 
                    items={this.props.goals}
                    remove={this.removeItem}
                />
            </div>
        )
    };
};

export default connect((state) => ({
    goals: state.goals
}))(Goals);