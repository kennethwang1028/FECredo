import React from 'react';
import { Route, Switch } from 'react-router';

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
  </Switch>
);

export default Routes;
