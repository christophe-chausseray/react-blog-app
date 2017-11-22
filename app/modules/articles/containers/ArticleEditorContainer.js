import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import ArticleEditorForm from './../components/ArticleEditorForm';
import { addArticle, updateArticle, getArticle } from './../connectors/api';

const mapStateToProps = state => ({
  initialValues:  state.editor.article
});
const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: 'ARTICLE_EDITOR_PAGE_LOADED', payload }),
  onUpdateField: (key, value) => dispatch({ type: 'ARTICLE_EDITOR_UPDATE_FIELD', key, value }),
  onSubmit: payload => dispatch({ type: 'ARTICLE_EDITOR_FORM_SUBMITTED', payload })
});

class ArticleEditorContainer extends Component {
  componentWillMount() {
    if (!this.props.match.params.slug) {
      this.props.onLoad(null);
    }
  }

  /**
   * Handle the field's updates action.
   *
   * @param event
   */
  onChangeField = event => {
    this.props.onUpdateField(event.target.name, event.target.value);
  };

  /**
   * Submit the editor form.
   *
   * @param article
   * @return {Promise.<T>}
   */
  submit = article => {
    let promise = null;
    if (!this.props.match.params.slug) {
      promise = addArticle(article);
    } else {
      promise = updateArticle(article);
    }

    return promise
      .then(payload => {
        this.props.onSubmit(payload);
        this.props.history.push(`/articles/${payload.slug}`);
      })
      .catch(response => {
        const errors = response.response.data.errors;
        Object.keys(errors).map((key) => {
          const value = errors[key];
          throw new SubmissionError({
            _error: `${key} ${value}`
          });
        });
      });
  };

  /**
   * Render the editor view.
   */
  render() {
    return (
      <ArticleEditorForm onSubmit={this.submit} initialValues={this.props.initialValues} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditorContainer);
