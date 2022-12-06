import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/NavBar';
// import Calculator from '../components/Calculator/Calculator';

const App = () => (
  <>
    <Navbar />
    <div id="detail">
      <Outlet />
    </div>
  </>
);

export default App;
