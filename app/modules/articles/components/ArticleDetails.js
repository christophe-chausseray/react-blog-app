import React from 'react';
import { Link } from 'react-router-dom';

const ArticleDetails = props => {
  return (
    <div className="container-fluid">
        <div className="row align-button">
          <div className="col-md-9">
            <h2 className="display-3">{props.article.title}</h2>
          </div>
          <div className="col-md-2">
            <Link className="btn btn-primary btn-block" to={`/editor/${props.article.slug}`}>Edit</Link>
          </div>
          <div className="col-md-2">
            <button className="btn btn-danger btn-block" onClick={props.onClick}>Delete</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>{props.article.description}</p>
            <p>{props.article.body}</p>
          </div>
        </div>
      </div>

  );
};

export default ArticleDetails;
