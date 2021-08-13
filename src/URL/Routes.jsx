import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Home from '../Component/Home/Home';
import Search from '../Component/Search/Search';
import LogIn from '../Component/LogIn/LogIn';
import SignUp from '../Component/LogIn/SignUp';
import Product from '../Component/Product/Product';

import {
  CategoriesListEnter,
  FeaturesListEnter,
} from '../Redux';

import { RoutesContainer } from '../Styles';

const Routes = () => {
  const isIconListClicked = useSelector((state) => state.sideBar.isIconListClicked);
  const width = useSelector((state) => state.window.windowWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    axios('http://localhost:3001/SDCredo/Categories')
      .then((data) => {
        dispatch(CategoriesListEnter(data.data));
      })
      .catch((err) => console.log(err));
    axios('http://localhost:3001/SDCredo/Features')
      .then((data) => {
        dispatch(FeaturesListEnter(data.data));
      })
      .catch((err) => console.log(err));
    console.error('Routes');
  }, []);
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
