import React, { Component } from 'react';
import axios from 'axios';
import Inventory from './inventory';
import NewItem from './new-item';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      itemStock: '',
      itemPrice: '',
      inventory: []
    };
    this.getInventory = this.getInventory.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleStock = this.handleStock.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInventory() {
    const promise = axios.get('http://localhost:5000/inventory');
    promise.then((response) => {
      this.setState({
        inventory: response.data
      });
    });
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
    const promise = axios.post('http://localhost:5000/new-item', newItem);
    promise.then((response) => {
      this.getInventory();
      setTimeout(() => { this.getInventory(); }, (5));
    });
    this.resetInputs();
  }
  
  resetInputs() {
    document.getElementById("inputName").value="";
    document.getElementById("inputStock").value="";
    document.getElementById("inputPrice").value="";
  }
  
  componentWillMount() {
    this.getInventory();
  }
  
  render() {
    return (
      <div>
        <NewItem handleName={this.handleName} handleStock={this.handleStock} handlePrice={this.handlePrice} handleSubmit={this.handleSubmit} />
        <Inventory currentInventory={this.state.inventory} />
      </div>
    );
  }

}

export default Body;