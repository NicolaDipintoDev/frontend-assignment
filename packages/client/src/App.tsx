import React, { useState } from 'react';
import './App.css';
import Pokemons from './pages/Pokemons';
import BestStarteEver from './pages/BestStarterEver'
import { BrowserRouter as Router, Route } from 'react-router-dom';




function App() {
  return <Router>
    <div>
      <Route exact path="/" component={Pokemons} />
      <Route exact path="/starters" component={BestStarteEver} />
    </div>
  </Router>
}

export default App;
