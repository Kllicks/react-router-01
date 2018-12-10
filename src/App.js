import React, { Component } from 'react';
import './App.css';

import Home from './Home';
import About from './About';
import Cats from './Cats';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <About/>
        <Cats/>
      </div>
    );
  }
}

export default App;
