import React from 'react';
import SingleArticle from './SingleArticle';

const Articles = (props) => {
  
  return (
    <section className="col-xs col-md-8">
      <h2>Articles</h2>
      {props.articles.map((article, i) => {

        return (
          <SingleArticle article={article} i={i} />
        )

      })}
    </section>
  )
}

export default Articles

{/* <div className="row">

<div className="card mt-2 ml-2" style={{"box-shadow": "4px 4px 3px Gainsboro"}} key={this.props.i}>
  <div className="card-block">
    <h4 className="card-title">{this.props.article.title}</h4>
    <p className="card-text">{this.props.article.body}</p>
  </div>
  <div className="card-footer d-inline-flex justify-content-around align-items-center">
    <ArticleAuthor author={this.props.author} i={this.props.i} />
    <i class="fa fa-question-circle-o" aria-hidden="true">{this.props.article.belongs_to}</i>
    
    <div className="d-inline-flex">
      <i className="fa fa-comment-o" aria-hidden="true" onClick={
        () => {
          if (this.state.commentsVisible === false) {
            this.setState({ commentsVisible: true })
          } else {
            this.setState({ commentsVisible: false })
          }
        }
      }>{this.state.comments.length}</i>

    </div>
    <Vote votes={this.props.article.votes} id={this.props.id} />
  </div>
  <div className="bg-faded p-2" style={{ display: (this.state.commentsVisible ? 'block' : 'none') }}>
    {this.state.comments.map(el => {
      return (<p>{el.body} | <i>{el.created_by}</i> | {el.created_at}</p>)
  })}
    <input type="text" placeHolder="your comment here"></input><button type="submit">Submit</button>
  </div>
</div>

</div> */}