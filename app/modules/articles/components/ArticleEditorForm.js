import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ArticleEditorForm = props => {
  const { error, handleSubmit, submitting } = props;

  return (
    <div className="container-fluid">
      <div className="row col-md-6 center">
        <form onSubmit={handleSubmit(props.onSubmit)} className="form-horizontal" align="center">
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          <div className="form-group">
            <Field name="title" component="input" type="input" placeholder="Article Title" className="form-control" onChange={props.onChangeField} />
          </div>
          <div className="form-group">
            <Field name="description" component="input" type="text" className="form-control" placeholder="Article Description" onChange={props.onChangeField} />
          </div>
          <div className="form-group">
            <Field name="body" component="textarea" type="text" placeholder="Article Body" className="form-control" onChange={props.onChangeField} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" disabled={submitting}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({ form: 'editor', enableReinitialize:true })(ArticleEditorForm);
