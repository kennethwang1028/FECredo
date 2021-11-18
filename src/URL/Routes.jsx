import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Component/Home/Home';
import Search from '../Component/Search/Search';
import LogIn from '../Component/LogIn/LogIn';
import SignUp from '../Component/LogIn/SignUp';
import Product from '../Component/Product/Product';
import FeverContainer from '../Component/Fever/FeverContainer';
import ShopCartContainer from '../Component/ShopCart/ShopCartContainer';
import { RoutesContainerStyle } from '../Styles';

const Routes = () => (
  <RoutesContainerStyle>
    <Switch>
      <Route
        path="/"
        exact
        render={
        () => (
          <div>
            <h1>hiasdsadsads</h1>
            <h1>hiasdsadsads</h1>
            <h1>hiasdsadsads</h1>
            <h1>hiasdsadsads</h1>
          </div>
        )
      }
      />
      <Route
        path="/location"
        exact
        render={() => <div>location</div>}
      />
      <Route
        path="/shopcart"
        exact
      >
        <ShopCartContainer />
      </Route>
      <Route
        path="/login"
        exact
      >
        <LogIn />
      </Route>
      <Route
        path="/signup"
        exact
      >
        <SignUp />
      </Route>
      <Route
        path="/home"
        exact
      >
        <Home />
      </Route>
      <Route
        path="/search/:categoryId"
      >
        <Search />
      </Route>
      <Route
        path="/search"
      >
        <Search />
      </Route>
      <Route
        path="/product"
      >
        <Product />
      </Route>
      <Route
        path="/bookmark"
      >
        <FeverContainer />
      </Route>
    </Switch>
  </RoutesContainerStyle>
);

export default Routes;
