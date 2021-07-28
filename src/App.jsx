import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './URL/Routes';
import NavTopBar from './URL/NavTopBar/NavTopBar';
import NavSideBar from './URL/NavSideBar/NavSideBar';
import store from './Redux/Store';

const App = () => (
  <Provider store={store}>
    <div style={{
      width: '102%', margin: '-10px', fontSize: '40px', color: 'green',
    }}
    >
      <Router>

        <NavSideBar />
        <NavTopBar />
        <Routes />

      </Router>
    </div>
  </Provider>
);

export default App;
