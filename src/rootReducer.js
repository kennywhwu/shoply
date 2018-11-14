import { ADD_ITEM, REMOVE_ITEM } from './actionTypes';

const INITIAL_STATE = { cart: {} };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    //updates the store's cart with new quanitity
    case ADD_ITEM:
      //if item is not in cart, add item and set quantity to 1
      //if item is already in cart, copy item and increase existing quantity by 1
      let quantity = state.cart[action.payload.id]
        ? state.cart[action.payload.id].quantity + 1
        : 1;
      let item = { ...action.payload, quantity };
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: item
        }
      };
      break;

    //updates store's cart to remove item or decrease quantity of item
    case REMOVE_ITEM:
      //if item to remove is not in the cart, do not modify the redux state
      if (!state.cart[action.id]) {
        return { ...state };
      } else if (state.cart[action.id].quantity === 1) {
        //if item to remove has quantity 1, remove item from cart
        let cart = { ...state.cart };
        delete cart[action.id];
        return { ...state, cart };
      } else {
        //if item to remove has quantity > 1, copy item and decrease quantity by 1
        let quantity = state.cart[action.id].quantity - 1;
        let item = { ...state.cart[action.id], quantity };

        return { ...state, cart: { ...state.cart, [action.id]: item } };
      }
      break;

    default:
      return state;
  }
}

export default rootReducer;
