import React, { Component } from 'react';

class Inventory extends Component {
  
  onClick() {
    
  }
  
  render() {
    return ( 
      <div>
        {this.props.currentInventory.map((item, index) => {
          return <div key={index}>{ item.itemStock}x { item.itemName }: ${item.itemPrice} each</div>
        })}
      </div>
    );
  }

}

export default Inventory;