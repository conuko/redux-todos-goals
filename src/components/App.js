import React from 'react';
import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';
import { connect } from 'react-redux';
import {
  handleInitialData
} from '../actions/shared';

class App extends React.Component {
  componentDidMount () {
      const { dispatch } = this.props;

      dispatch(handleInitialData())

  };
  render() {
      const { loading } = this.props;
      if (loading === true) {
          return <h3>Loading</h3>
      }
      return (
        <div className="flex h-screen">
          <div
          className="max-w-md m-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <ConnectedTodos />
            <ConnectedGoals />  
        </div>

        </div>

      )
  };
};

export default connect((state) => ({
  loading: state.loading
}))(App);