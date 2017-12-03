import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addMessage, deleteMessage } from '../actions/test';

class TestPage extends Component {
  render() {
    return (
        <div>
          <h2>test</h2>
          <button onClick={() => this.props.addMessage('Hello world!')}>Show message</button>
          <button onClick={() => this.props.deleteMessage()}>Hide message</button>
          <h3>{this.props.testStore}</h3>
        </div>
    );
  }
}

export default connect(
  state => ({ testStore: state.test }),
  dispatch => ({
    addMessage: message => dispatch(addMessage(message)),
    deleteMessage: () => dispatch(deleteMessage())
  })
)(TestPage);
