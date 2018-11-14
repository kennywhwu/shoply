import { addItem, decreaseItem, deleteItem } from './actionCreators';
import { ADD_ITEM, DECREASE_ITEM, DELETE_ITEM } from './actionTypes';

describe('addItem', () => {
  test('it returns object with key of type and payload', () => {
    let item = {
      id: 2,
      name: 'microwave',
      price: 100.0,
      image_url:
        'https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140'
    };
    let result = addItem(item);
    expect(result).toEqual({
      type: ADD_ITEM,
      payload: item
    });
  });
});

describe('decreaseItem', () => {
  test('it returns object with key of type and id', () => {
    let id = 2;
    let result = decreaseItem(id);
    expect(result).toEqual({
      type: DECREASE_ITEM,
      id
    });
  });
});

describe('deleteItem', () => {
  test('it returns object with key of type and id', () => {
    let id = 2;
    let result = deleteItem(id);
    expect(result).toEqual({
      type: DELETE_ITEM,
      id
    });
  });
});
