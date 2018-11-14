import React, { Component } from 'react';
// import './ItemButtonsCart.css';

class ItemButtonsCart extends Component {
  render() {
    return (
      <div className="ItemButtonsCart">
        Quantity: {this.props.quantity}
        <div>
          <button onClick={this.props.handleAdd}>+</button>
          <button onClick={this.props.handleDecrease}>-</button>
          <br />
          <button onClick={this.props.handleDelete}>Remove from cart</button>
        </div>
        <hr />
      </div>
    );
  }
}

export default ItemButtonsCart;
