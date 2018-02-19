import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

  state = {
    topics: [],
    topicsLoaded: false
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
        <nav className="navbar sticky-top navbar-toggleable-md navbar-light">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand"><img src={'../../img/nc_badge_long.png'} alt="Northcoders logo" style={{ width: '100px' }} /></Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active dropdown">
                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Topics
        </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  {this.state.topics.map(topic => (<Link className="dropdown-item" to={`/topics/${topic.slug}/articles`}>{`${topic.title}`}</Link>))}
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles">Articles</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
            </ul>

          </div>
            <Link to="https://www.linkedin.com/company/northcoders"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></Link>
            <Link to="https://twitter.com/northcoders"><i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></Link>
            <Link to="https://en-gb.facebook.com/northcoders/"><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></Link>
        </nav>
      )
    } else {

      return (
        <nav className="ncNav">
          <h1>Navbar Goes Here</h1>
          <p>Loading...</p>
        </nav>
      )

    }

  }

}

export default Navbar;