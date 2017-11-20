import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from './../components/ArticleDetails';
import { deleteArticle } from './../connectors/api';

const mapStateToProps = state => ({
  article: state.editor.article
});
const mapDispatchToProps = dispatch => ({});

class ArticleContainer extends Component {
  handleClickDelete = () => {
    deleteArticle(this.props.article.slug)
      .then(() => this.props.history.push(`/`));
  };

  render() {
    return(
      <Article article={this.props.article} onClick={this.handleClickDelete} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleContainer);
