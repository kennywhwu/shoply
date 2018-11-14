import rootReducer from './rootReducer';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

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
    expect(INITIAL_STATE).toEqual({
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
    });
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

describe('#rootReducer REMOVE_ITEM', () => {
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

  //////////////////////
  test('delete decreases quantity for existing items and is a pure function', () => {
    let itemToRemove = 4;
    let action = { type: REMOVE_ITEM, id: itemToRemove };
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
    expect(INITIAL_STATE).toEqual({
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
    });
  });

  /////////////
  test('delete removes item from store when quantity changes from 1 to 0', () => {
    let itemToRemove = 2;
    let action = { type: REMOVE_ITEM, id: itemToRemove };
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
    let action = { type: REMOVE_ITEM, id: itemToRemove };
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
