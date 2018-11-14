import { ADD_ITEM, DECREASE_ITEM, DELETE_ITEM } from './actionTypes';

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}

export function decreaseItem(id) {
  return {
    type: DECREASE_ITEM,
    id
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id
  };
}
