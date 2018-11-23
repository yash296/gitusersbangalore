import React, { Component } from 'react';

import './App.css';
import Users from './users';
class App extends Component {
  constructor() {
    super();
    this.state = {
      buttonCount: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      currentButton: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(i, event) {
    this.setState({ currentButton: i });
    console.log(i);
  }
  render() {
    const button1 = this.state.buttonCount.map((item, i) => (
      <button onClick={this.handleClick.bind(this, i)} key={i}>
        {item}
      </button>
    ));
    return (
      <div className="App">
        <div>{button1}</div>
        <Users button_no={this.state.currentButton} />
      </div>
    );
  }
}

export default App;
