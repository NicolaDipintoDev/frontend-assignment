import React, { useState } from 'react';
import './App.css';
import Pokemons from './pages/Pokemons';
import { BrowserRouter as Router, Route } from 'react-router-dom';




function App() {
  return <Router>
    <div>
      <Route exact path="/" component={Pokemons} />
    </div>
  </Router>
}

export default App;
