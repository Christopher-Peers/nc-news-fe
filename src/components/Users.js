import React from 'react';

class Users extends React.Component {

  state = {
    users: [],
    modifiedUsers: false,
    articles: []
  }

  getAllUsers = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/users`, { method: 'GET' })
      .then(res => res.json())
      .then(res => this.setState({ users: res.users }))
      .catch(err => console.log(err));

  }

  fetchArticles = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/articles`)
      .then(buffer => buffer.json())
      .then(res => this.setState({ articles: res.articles }))      
      .catch(err => console.log(err));
  }

  componentWillMount() {
    this.getAllUsers();
    this.fetchArticles();

  }

  render() {

    if (this.state.users.length > 0 && this.state.articles.length > 0 && this.state.modifiedUsers === false) {
      let modifiedUsers = [];

      this.state.users.forEach((user, i) => {
        
        let userArticles = this.state.articles.filter(article => article.created_by === user.username);
        user.articles = userArticles
        user.stars = user.articles.reduce((acc, next) => {
          return acc + next.votes;
        },0)
        user.stars = Math.round(user.stars / user.articles.length);
        modifiedUsers.push(user)

      })
      this.setState({users: modifiedUsers, modifiedUsers: true})
    }
    
    return (
      <div className="container-fluid">
        <h2 className="mt-1 text-center">Users</h2>
        {this.state.users.map(user => {
          return (
            <div className="row mt-2">
              <div className="col-3">
                <img className="img-fluid" src={user.avatar_url} />
              </div>
              <div className="col-3 d-flex align-items-center">
                <h4>{user.name}</h4>
              </div>
              <div className="col-3 d-flex align-items-center">
                <h4>Rating : {user.stars} <i className="fa fa-star-o" aria-hidden="true"></i></h4>
              </div>
              <div className="col-3 d-flex align-items-center">
                {this.state.users.map((user, i) => {
                  user.articles.length > 0 &&
                  user.articles.slice(0,2).forEach(article => (<p>{article.title}</p>))
                  
                })}
              </div>

            </div>
          )
        })}
      </div>
    )
  }
}

export default Users;