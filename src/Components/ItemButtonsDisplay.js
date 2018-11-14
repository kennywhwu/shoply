import React, { Component } from 'react';
// import './ItemButtonsDisplay.css';

class ItemButtonsDisplay extends Component {
  render() {
    return (
      <div className="ItemButtonsDisplay">
        <button onClick={this.props.handleAdd}>Add to Cart</button>
        <button onClick={this.props.handleRemove}>Remove from Cart</button>
      </div>
    );
  }
}

export default ItemButtonsDisplay;
