import React, { Component } from 'react';
import axios from 'axios';
import Inventory from './inventory';

class NewItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      itemStock: null,
      itemPrice: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleStock = this.handleStock.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleName(event) {
    this.setState({
      itemName: event.target.value
    });
  }
  
  handleStock(event) {
    this.setState({
      itemStock: event.target.value
    });
  }
  
  handlePrice(event) {
    this.setState({
      itemPrice: event.target.value
    });
  }
  
  handleSubmit() {
    const newItem = {
      itemName: this.state.itemName,
      itemStock: this.state.itemStock,
      itemPrice: this.state.itemPrice,
    };
    const promise = axios.post('localhost:5000/new-item', newItem);
    promise.then(() => {
      Inventory.getInventory();
    });
  }
  
  render() {
    return (
      <div>
        <input type='string' onChange={this.handleName} />
        <input type='string' onChange={this.handleStock} />
        <input type='string' onChange={this.handlePrice} />
        <button onClick={this.handleSubmit} />
      </div>
    );
  }

}

export default NewItem;