import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleList from './../components/ArticleList';
import { getArticleList } from './../connectors/api';

const mapStateToProps = state => {
  return ({
    articles: state.articleList.articles
  });
};
const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type:'ARTICLE_LIST', payload })
});

class ArticleListContainer extends Component {
  componentWillMount() {
    this.props.onLoad(getArticleList());
  }

  render() {
    return(
      <ArticleList articles={this.props.articles} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer);
