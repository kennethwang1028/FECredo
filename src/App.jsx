import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './URL/Routes';
import NavTopBar from './URL/NavTopBar/NavTopBar';
import NavSideBar from './URL/NavSideBar/NavSideBar';

const App = () => (
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

);

export default App;
