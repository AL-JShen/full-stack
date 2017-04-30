import React, { Component } from 'react';
import axios from 'axios';

class Inventory extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    };
    this.getInventory = this.getInventory.bind();
  }
  
  getInventory() {
    const promise = axios.get('localhost:5000/inventory');
    promise.then((response) => {
      this.setState({
        inventory: response.data
      });
    });
  }
  
  // componentDidMount() {
  //     this.getInventory();
  // }
  
  render() {
    return (
      <div>
        Testing inventory!
        {this.state.inventory.map(item => item)}
      </div>
    );
  }

}

export default Inventory;