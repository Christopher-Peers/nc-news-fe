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
    topPostersLoaded: false,
    loggedInUser: 'northcoder'
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
      nextState.users.forEach(user => {
        
        userTally[user.username] = {
        avatar: user.avatar_url,
        posts: 0,
        lastFiveArticles: []
        }

      })
      nextState.articles.forEach(article => {
        userTally[article.created_by].posts++
        userTally[article.created_by].lastFiveArticles.push(article) 
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
        <Articles articles={this.state.articles} topPosters={this.state.topPosters} loggedInUser={this.state.loggedInUser}/>
        <TopPosters topPosters={this.state.topPosters} />
      </div>
    )

  }
}

export default Homepage;