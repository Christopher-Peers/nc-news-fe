import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  state = {
    topics: [],
    topicsLoaded: false,
    loggedInUser: this.props.loggedInUser
  }

  fetchTopics = () => {

    return fetch(`${process.env.REACT_APP_API_URL}/topics`)
      .then(buffer => buffer.json())
      .then(topics => topics)
      .catch(err => console.log(err));

  }

  componentWillMount() {

    this.fetchTopics()
      .then(res => this.setState({
        topics: res.topics,
        topicsLoaded: true
      }))

  }

  render() {

    if (this.state.topicsLoaded) {

      return (

        <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
          <img className="navbar-brand" src={'../../img/nc_badge_short.png'} alt="Northcoders logo" style={{ width: '100px' }} />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Topics</Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {this.state.topics.map((topic, i) => (<Link className="dropdown-item" to={`/topics/${topic.slug}/articles`} key={`topicKey${i}`}>{`${topic.title}`}</Link>))}
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li> 
            </ul>
          </div>
          <span className="mr-2 d-none d-md-block">Current user:</span> 
          <img className="rounded-circle d-none d-md-block" src="https://avatars3.githubusercontent.com/u/6791502?v=3&s=200" alt="Logged in user" style={{width: "4rem"}} />
        </nav>
      )

    } else {

      return (
        <nav>
          <h1>Navbar Goes Here</h1>
          <p>Loading...</p>
        </nav>
      )

    }

  }

}

export default Navbar;