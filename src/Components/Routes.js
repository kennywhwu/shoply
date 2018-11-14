// Routes component to define url renders

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Cart from '../Containers/Cart';
import DisplayItems from '../Containers/DisplayItems';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/cart" render={() => <Cart />} />
        <Route exact path="/" render={() => <DisplayItems />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
