import React, { Component } from 'react';
import './DisplayItems.css';
import { connect } from 'react-redux';
// import { ADD_ITEM, REMOVE_ITEM } from '../actionTypes';
import { addItem, decreaseItem } from '../actionCreators';
import itemsObj from '../items.json';
import Item from '../Components/Item';
import { Link } from 'react-router-dom';

class DisplayItems extends Component {
  render() {
    //itemsObj.items is an array containing an object for each item
    //create item component for each obj and pass properties
    let displayItems = itemsObj.items.map(e => (
      <Item
        item={e}
        key={e.id}
        handleAdd={this.props.addItem}
        handleRemove={this.props.decreaseItem}
      />
    ));
    return (
      <div className="DisplayItems">
        <h1>Welcome to Shoply</h1>
        <hr />
        <Link to="/cart">
          <div id="cart-total">Total items in cart: {this.props.total} </div>
        </Link>
        {displayItems}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  let total = 0;

  //calculates total items in cart based on quantities in redux store
  for (let key in reduxState.cart) {
    total += parseInt(reduxState.cart[key].quantity);
  }
  return {
    total: total
  };
}

export default connect(
  mapStateToProps,
  { addItem, decreaseItem }
)(DisplayItems);
