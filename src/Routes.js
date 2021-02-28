import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cart from './screens/Cart';
import Products from './screens/Products';

import Navigation from './components/patterns/Navigation/Navigation';

export default function Routes() {
  return (
    <BrowserRouter>
      <Navigation />s
      <Switch>
        <Route path="/cart" component={Cart} />

        <Route path="/" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}
