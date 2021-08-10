import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './URL/Routes';
import NavTopBar from './URL/NavTopBar/NavTopBar';
import NavSideBar from './URL/NavSideBar/NavSideBar';
import store from './Redux/Store';

import { AppContainer } from './Styles';

const App = () => (
  <Provider store={store}>
    <AppContainer>
      <Router>
        <NavSideBar />
        <div>
          <NavTopBar />
          <Routes />
        </div>
      </Router>
    </AppContainer>
  </Provider>
);

export default App;
