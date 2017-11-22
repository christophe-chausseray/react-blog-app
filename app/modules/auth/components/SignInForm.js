import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SignInForm = props => {
  const { error, handleSubmit, submitting } = props;

  return (
    <div className="container-fluid">
      <div className="row col-md-6 center">
        <form onSubmit={handleSubmit(props.onSubmit)} className="form-horizontal" align="center">
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          <div className="form-group">
            <label className="control-label col-md-3" htmlFor="email">Email</label>
            <div className="col-md-8">
              <Field name="email" className="form-control" component="input" type="email" onChange={props.onChangeEmail} />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3" htmlFor="password">Password</label>
            <div className="col-md-8">
              <Field name="password" className="form-control" component="input" type="password" onChange={props.onChangePassword} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-offset-3 col-md-8">
                <button type="submit" className="btn btn-primary" disabled={submitting}>Sign In</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reduxForm({ form: 'signIn' })(SignInForm);
