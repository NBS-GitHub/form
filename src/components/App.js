import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';
import Display from './Display';


class App extends Component {
  state = {
    ageEnough: false,
    isSubmitted: false
  }

  handleChange = () => {
    this.setState(prevState => ({
      ageEnough: !prevState.ageEnough,
      isSubmitted: false
    }));
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      isSubmitted: true
    }));
  }

  render() {
    const { ageEnough, isSubmitted } = this.state;
    return (
      <>
        <Header />
        <Form
          change={this.handleChange}
          submit={this.handleSubmit}
          ageEnough={ageEnough}
        />
        <Display ageEnough={ageEnough} isSubmitted={isSubmitted} />
      </>
    );
  }
}

export default App;
