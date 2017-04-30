import React, { Component } from 'react';
import Inventory from './inventory';
import NewItem from './new-item';

class Body extends Component {

  render() {
    return (
      <div>
        <NewItem />
        <Inventory />
      </div>
    );
  }

}

export default Body;