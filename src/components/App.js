import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Panel from './Panel';

class App extends Component {
  state = {
    isVisible: false
  }

  handleClick = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  }

  render() {
    return (
      <div className="App">
        <Button click={this.handleClick} isVisible={this.state.isVisible} />
        <Panel isVisible={this.state.isVisible} />
      </div>
    );
  }
}

export default App;
