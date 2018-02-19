import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './Homepage';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar />
          <Homepage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
