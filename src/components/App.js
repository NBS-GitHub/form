import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Number from './Number';
import Buy from './Buy';

class App extends Component {
  state = {
    stock: 10,
    order: 1
  }

  handleClick = (type) => {
    if (type === 'subtract') {
      this.setState(prevState => ({
        order: prevState.order - 1
      }));
    } else if (type === 'add') {
      this.setState(prevState => ({
        order: prevState.order + 1
      }));
    }
  }

  handleBuy = () => {
    this.setState(prevState => ({
      stock: prevState.stock - prevState.order,
      order: 0
    }));
  }

  render() {
    const { order, stock } = this.state;
    return (
      <>
        <Button
          text='-'
          order={order}
          stock={stock}
          click={this.handleClick.bind(this, 'subtract')}
        />
        <Number order={order} />
        <Button
          text='+'
          order={order}
          stock={stock}
          click={this.handleClick.bind(this, 'add')}
        />
        {order > 0 && <Buy click={this.handleBuy} />}
      </>
    );
  }
}

export default App;