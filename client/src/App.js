import React, { Component } from 'react';
import newItem from './components/newItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <newItem />
      </div>
    );
  }
}

export default App;
