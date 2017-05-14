import React, { Component } from 'react';

class NewItem extends Component {

  render() {
    return (
      <div>
        <input id='inputName' type='string' onChange={this.props.handleName} />
        <input id='inputStock' type='string' onChange={this.props.handleStock} />
        <input id='inputPrice' type='string' onChange={this.props.handlePrice} />
        <button onClick={this.props.handleSubmit} />
      </div>
    );
  }

}

export default NewItem;