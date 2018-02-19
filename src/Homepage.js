import React from 'react';
import Articles from './components/Articles';
import TopPosters from './components/TopPosters';

class Homepage extends React.Component {

  state = {
    users: [],
    usersLoaded: false,
    articles: [],
    articlesLoaded: false,
    topPosters: [],
    topPostersLoaded: false
  }

  fetchUsers = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/users/`)
      .then(buffer => buffer.json())
      .catch(err => console.log(err))
  }

  fetchArticles = () => {
    return fetch(`${process.env.REACT_APP_API_URL}/articles`)
      .then(buffer => buffer.json())
      .catch(err => console.log(err));
  }

  fetchArticlesByTopic = (topic) => {
    return fetch(`${process.env.REACT_APP_API_URL}/topics/${topic}/articles`)
      .then(buffer => buffer.json())
      .catch(err => console.log(err));
  }

  componentWillMount() {
    this.fetchUsers()
      .then(res => this.setState({
        users: res.users,
        usersLoaded: true
      }));
    this.fetchArticles()
      .then(res => this.setState({
        articles: res.articles,
        articlesLoaded: true
      }))
  }

  componentWillUpdate(nextProps, nextState) {

    if (nextState.articlesLoaded && nextState.usersLoaded && !nextState.topPostersLoaded) {
      let userTally = {};
      nextState.users.map(user => userTally[user.username] = {
        avatar: user.avatar_url,
        posts: 0
      })
      nextState.articles.map(article => {
        userTally[article.created_by].posts++
      })
      this.setState({
        topPosters: userTally,
        topPostersLoaded: true,
      })
    }

  }

  componentWillReceiveProps(nextProps) {

    this.fetchArticlesByTopic(nextProps.match.params.topic)
      .then(res => this.setState({articles: res.articles}))
      .catch(err => console.log(err));

}

  render() {
    
    return (
      <div className="row"> 
        <Articles articles={this.state.articles} />
        <TopPosters topPosters={this.state.topPosters} />
      </div>
    )

  }
}

export default Homepage;