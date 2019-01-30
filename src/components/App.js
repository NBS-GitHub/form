import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Panel from './Panel';

class App extends Component {
  state = {
    count: 0,
    result: 0
  }

  handleClick(action, text) {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
    if (action === 'subtraction') {
      if (text === '-10') {
        this.setState(prevState => ({
          result: prevState.result - 10
        }));
      } else if (text === '-1') {
        this.setState(prevState => ({
          result: prevState.result - 1
        }));
      }
    } else if (action === 'addition') {
      if (text === '+1') {
        this.setState(prevState => ({
          result: prevState.result + 1
        }));
      } else if (text === '+10') {
        this.setState(prevState => ({
          result: prevState.result + 10
        }));
      }
    } else if (action === 'reset') {
      this.setState(prevState => ({
        result: 0
      }));
    }
  }

  render() {
    return (
      <>
        <Button
          click={this.handleClick.bind(this, 'subtraction', '-10')}
          text='-10'
        />
        <Button
          click={() => this.handleClick('subtraction', '-1')}
          text='-1'
        />
        <Button
          click={this.handleClick.bind(this, 'reset')}
          text='Reset'
        />
        <Button
          click={this.handleClick.bind(this, 'addition', '+1')}
          text='+1'
        />
        <Button
          click={this.handleClick.bind(this, 'addition', '+10')}
          text='+10'
        />
        <Panel
          count={this.state.count}
          result={this.state.result}
        />
      </>
    );
  }
}

export default App;
