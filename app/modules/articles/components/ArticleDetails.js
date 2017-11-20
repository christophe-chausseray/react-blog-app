import React from 'react';
import { Link } from 'react-router-dom';

const ArticleDetails = props => {
  return (
    <div>
      <h2>{props.article.title}</h2>
      <p>{props.article.description}</p>
      <p>{props.article.body}</p>
      <div>
        <Link to={`/editor/${props.article.slug}`}>Edit</Link>
        <button onClick={props.onClick}>Delete</button>
      </div>
    </div>
  );
};

export default ArticleDetails;
