import React, { Component } from 'react';
import './App.css';
import List from './List';
import Buttons from './Buttons';

class App extends Component {
  state = {
    users: this.props.data.users
  }


  handleClick = e => {
    let users = this.props.data.users;
    if (e.target.value === 'female') {
      users = users.filter(user => user.sex === 'female')
    } else if (e.target.value === 'male') {
      users = users.filter(user => user.sex === 'male')
    }
    this.setState(prevState => ({
      users
    }))
  }

  render() {
    return (
      <>
        <Buttons click={this.handleClick} />
        <List users={this.state.users} />
      </>
    );
  }
}

export default App;