import React from 'react';
import Modal from './Modal';

class SingleArticle extends React.Component {

  state = {
    comments: [],
    commentsVisible: false,
    newComment: '',
    votes: this.props.article.votes
  }

  getArticleComments = (id) => {

    return fetch(`${process.env.REACT_APP_API_URL}/articles/${id}/comments`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res.comments
        })
      })
      .catch(err => console.log(err))
  }

  changeArticleVote = (articleId, modifier) => {

    return fetch(`${process.env.REACT_APP_API_URL}/articles/${articleId}?vote=${modifier}`, { method: 'PUT' })
      .then(buffer => buffer.json())
      .then(res => this.setState({votes: res.votes}))
      .catch(err => console.log(err))

  }

  changeCommentVotes = (commentId, modifier) => {

    return fetch(`${process.env.REACT_APP_API_URL}/comments/${commentId}?vote=${modifier}`, { method: 'PUT' })
      .then(() => this.getArticleComments(this.props.article._id))  
      .catch(err => console.log(err))

  }

  postNewArticleComment = (id, userComment) => {
    
    return fetch(`${process.env.REACT_APP_API_URL}/articles/${id}/comments`, {
      method: 'POST',
      headers: new Headers({"Content-Type": "application/json"}),
      body: JSON.stringify({"comment": userComment})
    })
      .then(res => this.getArticleComments(id))
  }

  handleCommentChange = (event) => {
    this.setState({
      newComment: event.target.value
    })
  }

  handleCommentClick = (event) => {
    event.preventDefault();
    this.postNewArticleComment(this.props.article._id, this.state.newComment)
  }

  componentWillMount() {
    this.getArticleComments(this.props.article._id)
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({votes: nextProps.article.votes})
    this.getArticleComments(nextProps.article._id)
  }

  render() {
    
    return (

      <article className="card mt-3" style={{ "box-shadow": "4px 4px 3px Gainsboro" }} key={this.props.i}>

        <div className="card-block p-2">
          <h4 className="card-title">{this.props.article.title}</h4>
          <p className="card-text">{this.props.article.body}</p>
        </div>

        <div className="card-footer container-fluid">
          <div className="row justify-content-around">

            <div className="d-inline text-center">
              <span><i class="fa fa-user-circle-o" aria-hidden="true" />
                <Modal authorName={this.props.article.created_by} />
                
              </span>
            </div>
            <div className="d-inline text-center">
              <i class="fa fa-question-circle-o" aria-hidden="true" /><span className="d-none d-md-inline">{`  ${this.props.article.belongs_to}`}</span>
            </div>
            <div className="d-inline text-center">
              <i class="fa fa-heart-o" aria-hidden="true" />
              <span style={{ color: (this.props.article.votes > 0 ? "green" : "red") }}>{`  ${this.props.article.votes}  `}</span>
              <i class="fa fa-chevron-up" aria-hidden="true" onClick={() => {this.changeArticleVote(this.props.article._id, 'up')}} />
              <i class="fa fa-chevron-down" aria-hidden="true" onClick={() => {this.changeArticleVote(this.props.article._id, 'down')}} />
            </div>
            <div className="d-inline text-center">
              <i class="fa fa-comment-o" aria-hidden="true" onClick={() => {
                if (this.state.commentsVisible === false) this.setState({ commentsVisible: true })
                else this.setState({ commentsVisible: false })
              }} />
              <span> {`  ${this.state.comments.length}`}</span>
            </div>

          </div>

          <div className="row bg-faded p-2" style={{ display: (this.state.commentsVisible ? "block" : "none") }}>
              {this.state.comments.map(comment => (
                
              <p>{comment.body} | {comment.created_by} | {comment.votes} 
                <i class="fa fa-heart-o" aria-hidden="true" /> 
                <i class="fa fa-chevron-up" aria-hidden="true" onClick={() => {this.changeCommentVotes(comment._id, 'up')}} />
                <i class="fa fa-chevron-down" aria-hidden="true" onClick={() => {this.changeCommentVotes(comment._id, 'down')}} />
            </p>))}
            <form>
              <input type="text" placeholder="your comment here" onChange={this.handleCommentChange}></input><button onClick={this.handleCommentClick} >Submit</button>
            </form>
          </div>
        </div>

      </article>

    )
  }
}

export default SingleArticle;