import React, { Component } from 'react';
// import './ItemButtonsCart.css';

class ItemButtonsCart extends Component {
  render() {
    return (
      <div className="ItemButtonsCart">
        <button onClick={this.props.handleRemove}>Remove from Cart</button>
      </div>
    );
  }
}

export default ItemButtonsCart;
