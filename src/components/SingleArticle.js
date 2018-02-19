import React from 'react';

class SingleArticle extends React.Component {

  state = {
    comments: [],
    commentsVisible: false,
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

  componentWillMount() {
    this.getArticleComments(this.props.article._id)
  }



  render() {
    
    return (

      <article className="card mt-3" style={{ "box-shadow": "4px 4px 3px Gainsboro" }} key={this.props.i}>

        <div className="card-block p-2">
          <h4 className="card-title">{this.props.article.title}</h4>
          <p className="card-text">{this.props.article.body}</p>
        </div>

        <div className="card-footer container-fluid">
          <div className="row">

            <div className="col-3 text-center">
              <i class="fa fa-user-circle-o" aria-hidden="true"></i><span className="d-none d-md-block">{` ${this.props.article.created_by}`}</span>
            </div>
            <div className="col-3 text-center">
              <i class="fa fa-question-circle-o" aria-hidden="true"></i><span className="d-none d-md-block">{` ${this.props.article.belongs_to}`}</span>
            </div>
            <div className="col-3 text-center">
              <i class="fa fa-heart-o" aria-hidden="true"></i><span className="d-none d-md-block">{` ${this.state.votes}`}</span>
            </div>
            <div className="col-3 text-center">
              <i class="fa fa-comment-o" aria-hidden="true" onClick={() => {
                if (this.state.commentsVisible === false) this.setState({commentsVisible : true})
                else this.setState({commentsVisible : false})
              }} ></i><span className="d-none d-md-block">{` ${this.state.comments.length}`}</span>
            </div>

          </div>

          <div className="row bg-faded p-2" style={{ display: (this.state.commentsVisible ? 'block' : 'none') }}>
            {this.state.comments.map(comment => (<p>{comment.body}</p>))}
          </div>
        </div>

      </article>

    )
  }


}

export default SingleArticle;