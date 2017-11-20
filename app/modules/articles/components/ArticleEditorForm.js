import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ArticleEditorForm = props => {
  const { error, handleSubmit, submitting } = props;

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      {error && <div className="error">{error}</div>}
      <div>
        <Field name="title" component="input" type="input" placeholder="Article Title" onChange={props.onChangeField} />
      </div>
      <div>
        <Field name="description" component="textarea" type="text" placeholder="Article Description" onChange={props.onChangeField} />
      </div>
      <div>
        <Field name="body" component="textarea" type="text" placeholder="Article Body" onChange={props.onChangeField} />
      </div>
      <button type="submit" disabled={submitting}>Submit</button>
    </form>
  );
};

export default reduxForm({ form: 'editor', enableReinitialize:true })(ArticleEditorForm);
