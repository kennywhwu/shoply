import React, { Component } from 'react';
// import './Cart.css';
import { connect } from 'react-redux';
import { addItem, decreaseItem, deleteItem } from '../actionCreators';
import Item from '../Components/Item';
import { Link } from 'react-router-dom';

class Cart extends Component {
  render() {
    // Create Item component for each existing item in the Redux store
    let cartItems = [];
    for (let key in this.props.cart) {
      let item = this.props.cart[key];
      cartItems.push(
        <Item
          item={item}
          key={item.id}
          handleAdd={this.props.addItem}
          handleRemove={this.props.decreaseItem}
          handleDelete={this.props.deleteItem}
          isPurchased={true}
        />
      );
    }

    // Object.keys(this.props.cart).map()

    return (
      <div className="Cart">
        <h1>Your Shopping Cart</h1>
        <Link to="/">
          <button>Return to Item List</button>
        </Link>
        {cartItems}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.cart
  };
}

export default connect(
  mapStateToProps,
  { addItem, decreaseItem, deleteItem }
)(Cart);
