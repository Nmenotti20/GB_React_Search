// import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import './App.css';
// import Axios from './utils/API';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Saved from './pages/Saved';
import TitleBlock from './components/TitleBlock';

function App() {

  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <TitleBlock />
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
    
  );
}

export default App;
