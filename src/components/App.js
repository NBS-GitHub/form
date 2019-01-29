import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Panel from './Panel';

class App extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  }

  handleReset = () => {
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div className="App">
        <Form value={this.state.value} change={this.handleChange} click={this.handleReset} />
        <Panel value={this.state.value} />
      </div>
    );
  }
}

export default App;
