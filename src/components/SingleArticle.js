import React from 'react';

class SingleArticle extends React.Component {

  state = {
    comments: [],
    commentsVisible: false,
    votes: 0
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
              <i class="fa fa-user-circle-o" aria-hidden="true"></i>{` ${this.props.article.created_by}`}
            </div>
            <div className="col-3 text-center">
              <i class="fa fa-question-circle-o" aria-hidden="true"></i>{` ${this.props.article.belongs_to}`}
            </div>
            <div className="col-3 text-center">
              <i class="fa fa-heart-o" aria-hidden="true"></i>{` likes`}
            </div>
            <div className="col-3 text-center">
              <i class="fa fa-comment-o" aria-hidden="true" onClick={() => {
                if (this.state.commentsVisible === false) this.setState({commentsVisible : true})
                else this.setState({commentsVisible : false})
              }} ></i>{` comments`}
            </div>
          </div>
          <div className="bg-faded p-2" style={{ display: (this.state.commentsVisible ? 'block' : 'none') }}>
            <p>Visible</p>
          </div>
        </div>

      </article>

    )
  }


}

export default SingleArticle;