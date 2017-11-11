import React from 'react';
import ArticlePreview from './ArticlePreview';

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div>Loading...</div>
    );
  }

  if (props.articles === 0) {
    return (
      <div>
        No articles are here... yet
      </div>
    );
  }

  return (
    <div>
      {
        props.articles.map(article => {
          return (
            <ArticlePreview article={article} key={article.slug} />
          )
        })
      }
    </div>
  );
};

export default ArticleList;
