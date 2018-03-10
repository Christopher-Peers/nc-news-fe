import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Homepage from './Homepage';
import NoMatch from './NoMatch';

class App extends Component {

  state = {
    loggedInUser: 'northcoder'
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar loggedInUser={this.state.loggedInUser} />
          <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/users" component={Users} />
            <Route path="/topics/:topic/articles" component={Homepage} />
            <Route component={NoMatch}/>
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
