import React from 'react';

const ArticlePreview = props => {
  const article = props.article;

  return (
    <div>
      <div className="panel">
        <div className="page-heading">
          <div className="row">
            <div className="col-md-12">
              <h2>{article.title}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>Author : {article.author.username}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>Publication date : {new Date(article.createdAt).toDateString()}</p>
            </div>
          </div>
        </div>
        <div className="panel-body">
          <p>{article.description}</p>
          <p>{article.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
