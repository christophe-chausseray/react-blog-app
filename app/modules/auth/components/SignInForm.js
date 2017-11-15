import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SignInForm = props => {
  const { error, handleSubmit, submitting } = props;

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      {error && <div className="error">{error}</div>}
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" onChange={props.onChangeEmail} />
      </div>
      <div>
        <label htmlFor="password">Pasword</label>
        <Field name="password" component="input" type="password" onChange={props.onChangePassword} />
      </div>
      <button type="submit" disabled={submitting}>Sign Up</button>
    </form>
  );
};

export default reduxForm({ form: 'signIn' })(SignInForm);
