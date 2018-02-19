import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './Homepage';
import NoMatch from './NoMatch';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Homepage} />
            {/* <Route exact path="/topics" component={ArticlesPage} />
            <Route exact path="/articles" component={ArticlesPage} /> */}
            <Route path="/topics/:topic/articles" component={Homepage} />
            <Route component={NoMatch}/>
          </Switch>
            {/* <Homepage /> */}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
