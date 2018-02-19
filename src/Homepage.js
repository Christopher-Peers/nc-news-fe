import React from 'react';
import Articles from './components/Articles';
import TopPosters from './components/TopPosters';

class Homepage extends React.Component {

  state = {
    users: [],
    usersLoaded: false
  }

  fetchUsers = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/users/`)
      .then(buffer => buffer.json())
      .then(res => res)
      .catch(err => console.log(err))
  }

  componentWillMount() {
    this.fetchUsers()
    .then(res => this.setState({
      users: res.users,
      usersLoaded: true
    }))
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="row">
        <Articles />
        <TopPosters />
      </div>
    )

  }
}

export default Homepage;