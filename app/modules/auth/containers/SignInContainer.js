import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { loginUser } from './../connectors/api';
import SignInForm from './../components/SignInForm';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  onChangeEmail: value => dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'email', value }),
  onChangePassword: value => dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'password', value }),
  onSubmit: (email, password) => {
    const payload = loginUser(email, password);
    return dispatch({ type: 'LOGIN', payload });
  }
});

class SignInContainer extends Component {
  constructor() {
    super();
  }

  submit = values => {
    return this.props.onSubmit(values.email, values.password)
      .then(response => this.props.history.push('/'))
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

  render() {
    return (
      <div>
        <SignInForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer)
