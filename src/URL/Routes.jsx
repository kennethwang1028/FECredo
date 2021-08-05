import React from 'react';
import { Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';

import Home from '../Component/Home/Home';
import Search from '../Component/Search/Search';
import LogIn from '../Component/LogIn/LogIn';
import SignUp from '../Component/LogIn/SignUp';
import Product from '../Component/Product/Product';

import { RoutesContainer } from '../Styles';

const Routes = () => {
  const isIconListClicked = useSelector((state) => state.sideBar.isIconListClicked);
  const width = useSelector((state) => state.window.windowWidth);
  return (
    <RoutesContainer
      isIconListClicked={isIconListClicked}
      width={width}
    >
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
        <Route
          path="/product"
        >
          <Product />
        </Route>
      </Switch>
    </RoutesContainer>
  );
};

export default Routes;
