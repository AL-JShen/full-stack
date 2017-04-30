import React, { Component } from 'react';
import axios from 'axios';

class newItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      stock: 0,
      price: '',
      inventory: []
    };
    this.handleName = this.handleName.bind();
    this.handleStock = this.handleStock.bind();
    this.handlePrice = this.handlePrice.bind();
    this.handleSubmit = this.handleSubmit.bind();
    this.getInventory = this.getInventory.bind();
  }
  
  handleName(event) {
    this.setState({
      name: event.target.value
    });
  }
  
  handleStock(event) {
    this.setState({
      stock: event.target.value
    });
  }
  
  handlePrice(event) {
    this.setState({
      price: event.target.value
    });
  }
  
  handleSubmit(event) {
    const item = {
      name: this.state.name, 
      stock: this.state.stock,
      price: this.state.price
    };
    const promise = axios.post('localhost:5000/new-item', item);
    promise.then((response) => {
      this.getInventory();
    });
  }
  
  getInventory() {
    const promise = axios.get('localhost:5000/inventory');
    promise.then((response) =>{
      this.setState({
        inventory: response.data
      })
    });  
  }
  
  
  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleName}/>
        <input value={this.state.stock} onChange={this.handleStock}/>
        <input value={this.state.price} onChange={this.handlePrice}/>
        <button onClick={this.handleSubmit} >Submit</button>
        
        <div className='inventory'>
          {this.state.inventory.map((item, index) => {
            return(
              {item}
            )
          })}
        </div>
        
      </div>
    );
  }

  componentDidMount() {
    this.getInventory();
  }
}

export default newItem;