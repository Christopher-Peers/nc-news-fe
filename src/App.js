import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Homepage from './Homepage';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <Homepage />
      </div>
    );
  }
}

export default App;
