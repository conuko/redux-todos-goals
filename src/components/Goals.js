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
            <div>
                <h1>Goals</h1>
                <input
                    type='text'
                    placeholder='Add Goal'
                    ref={(input) => this.input = input}
                />
                <button onClick={this.addItem}>Add Goal</button>

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