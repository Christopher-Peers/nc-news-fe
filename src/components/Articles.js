import React from 'react';
import SingleArticle from './SingleArticle';

const Articles = (props) => {
  
  return (
    
    <section className="col-xs col-md-9">
      <h2 className="text-center">Articles</h2>
      {props.articles.map((article, i) => {

        return (<SingleArticle article={article} i={i} />)

      })}
    </section>
  )
}

export default Articles