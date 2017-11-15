import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import { registerUser } from './../connectors/api';
import SignUpForm from './../components/SignUpForm';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  onChangeUsername: value => dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'usename', value }),
  onChangeEmail: value => dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'email', value }),
  onChangePassword: value => dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'password', value }),
  onSubmit: (username, email, password) => {
    const payload = registerUser(username, email, password);
    return dispatch({ type: 'REGISTER', payload });
  }
});

class SignUpContainer extends Component {
  constructor() {
    super();
  }

  submit = values => {
    return this.props.onSubmit(values.username, values.email, values.password)
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
        <h2>Sign Up</h2>
        <SignUpForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
