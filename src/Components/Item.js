import React, { Component } from 'react';
import './Item.css';
import ItemButtonsDisplay from './ItemButtonsDisplay';
import ItemButtonsCart from './ItemButtonsCart';

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd(evt) {
    this.props.handleAdd(this.props.item);
  }

  handleDecrease(evt) {
    this.props.handleRemove(this.props.item.id);
  }

  handleDelete(evt) {
    this.props.handleDelete(this.props.item.id);
  }

  render() {
    return (
      <div className="Item">
        <h3>{this.props.item.name}</h3>
        <h5>${this.props.item.price}</h5>
        <img
          className="item-img"
          src={this.props.item.image_url}
          alt={this.props.item.name}
        />
        {this.props.isPurchased ? (
          <ItemButtonsCart
            quantity={this.props.item.quantity}
            handleDelete={this.handleDelete}
            handleAdd={this.handleAdd}
            handleDecrease={this.handleDecrease}
          />
        ) : (
          <ItemButtonsDisplay
            handleAdd={this.handleAdd}
            handleDecrease={this.handleDecrease}
          />
        )}
      </div>
    );
  }
}

export default Item;
