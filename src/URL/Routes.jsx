import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../Component/Home/Home';
import Search from '../Component/Search/Search';
import LogIn from '../Component/LogIn/LogIn';
import SignUp from '../Component/LogIn/SignUp';

const Routes = () => (
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
      render={() => <div>shopcart</div>}
    />
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
  </Switch>
);

export default Routes;
