import rootReducer from './rootReducer';
import { ADD_ITEM, DECREASE_ITEM, DELETE_ITEM } from './actionTypes';
import deepFreeze from 'deep-freeze';

const microwave = {
  id: 2,
  name: 'microwave',
  price: 100.0,
  image_url:
    'https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140'
};
const toaster_oven = {
  id: 3,
  name: 'toaster oven',
  price: 20.49,
  image_url:
    'https://images-na.ssl-images-amazon.com/images/I/81110bb7g2L._SL1500_.jpg'
};
const chair = {
  id: 4,
  name: 'chair',
  price: 100.89,
  image_url: 'https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG',
  quantity: 2
};

describe('#rootReducer ADD_ITEM', () => {
  let INITIAL_STATE = {
    cart: {
      2: {
        id: 2,
        name: 'microwave',
        price: 100.0,
        image_url:
          'https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140',
        quantity: 1
      }
    }
  };

  // Test that ADD_ITEM is pure and doesn't mutate input
  Object.freeze(INITIAL_STATE);

  test('add works with new items and is a pure function', () => {
    let newItem = {
      id: 3,
      name: 'toaster oven',
      price: 20.49,
      image_url:
        'https://images-na.ssl-images-amazon.com/images/I/81110bb7g2L._SL1500_.jpg'
    };
    let action = { type: ADD_ITEM, payload: newItem };
    let expectedState = {
      cart: {
        2: {
          id: 2,
          name: 'microwave',
          price: 100.0,
          image_url:
            'https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140',
          quantity: 1
        },
        3: {
          id: 3,
          name: 'toaster oven',
          price: 20.49,
          image_url:
            'https://images-na.ssl-images-amazon.com/images/I/81110bb7g2L._SL1500_.jpg',
          quantity: 1
        }
      }
    };
    expect(rootReducer(INITIAL_STATE, action)).toEqual(expectedState);
  });

  //////////////////////
  test('add increases quantity for existing items', () => {
    let newItem = {
      id: 2,
      name: 'microwave',
      price: 100.0,
      image_url:
        'https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140'
    };
    let action = { type: ADD_ITEM, payload: newItem };
    let expectedState = {
      cart: {
        2: {
          id: 2,
          name: 'microwave',
          price: 100.0,
          image_url:
            'https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140',
          quantity: 2
        }
      }
    };
    expect(rootReducer(INITIAL_STATE, action)).toEqual(expectedState);
  });
});

describe('#rootReducer DECREASE_ITEM', () => {
  let INITIAL_STATE = {
    cart: {
      2: {
        id: 2,
        name: 'microwave',
        price: 100.0,
        image_url:
          'https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140',
        quantity: 1
      },
      4: {
        id: 4,
        name: 'chair',
        price: 100.89,
        image_url: 'https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG',
        quantity: 2
      }
    }
  };

  Object.freeze(INITIAL_STATE);

  //////////////////////
  test('delete decreases quantity for existing items and is a pure function', () => {
    let itemToRemove = 4;
    let action = { type: DECREASE_ITEM, id: itemToRemove };
    let expectedState = {
      cart: {
        2: {
          id: 2,
          name: 'microwave',
          price: 100.0,
          image_url:
            'https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140',
          quantity: 1
        },
        4: {
          id: 4,
          name: 'chair',
          price: 100.89,
          image_url: 'https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG',
          quantity: 1
        }
      }
    };
    expect(rootReducer(INITIAL_STATE, action)).toEqual(expectedState);
  });

  /////////////
  test('delete removes item from store when quantity changes from 1 to 0', () => {
    let itemToRemove = 2;
    let action = { type: DECREASE_ITEM, id: itemToRemove };
    let expectedState = {
      cart: {
        4: {
          id: 4,
          name: 'chair',
          price: 100.89,
          image_url: 'https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG',
          quantity: 2
        }
      }
    };
    expect(rootReducer(INITIAL_STATE, action)).toEqual(expectedState);
  });

  /////////////
  test("deleting an item that isn't in cart makes no change to store", () => {
    let itemToRemove = 6;
    let action = { type: DECREASE_ITEM, id: itemToRemove };
    let expectedState = {
      cart: {
        2: {
          id: 2,
          name: 'microwave',
          price: 100.0,
          image_url:
            'https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140',
          quantity: 1
        },
        4: {
          id: 4,
          name: 'chair',
          price: 100.89,
          image_url: 'https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG',
          quantity: 2
        }
      }
    };
    expect(rootReducer(INITIAL_STATE, action)).toEqual(expectedState);
  });
});

describe('#rootReducer DELETE_ITEM', () => {
  let INITIAL_STATE = {
    cart: {
      2: {
        id: 2,
        name: 'microwave',
        price: 100.0,
        image_url:
          'https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140',
        quantity: 5
      }
    }
  };

  Object.freeze(INITIAL_STATE);

  /////////////
  test('delete removes item from store', () => {
    let itemToRemove = 2;
    let action = { type: DELETE_ITEM, id: itemToRemove };
    let expectedState = {
      cart: {}
    };
    expect(rootReducer(INITIAL_STATE, action)).toEqual(expectedState);
  });
});
