import React from 'react';
import { Link } from 'react-router-dom';

const ArticlePreview = props => {
  const article = props.article;

  return (
    <div>
      <div>
        <img src={article.author.image} />

        <div>
          {article.author.username}
          <span>
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>

        <div>
          {article.favoriteCount}
        </div>

        <Link to={`articles/${article.slug}`}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <span>Read more...</span>
          <ul>
            {
              article.tagList.map(tag => {
                return (
                  <li key={tag}>tag</li>
                );
              })
            }
          </ul>
        </Link>
      </div>
    </div>
  );
};

export default ArticlePreview;
