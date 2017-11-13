import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from './../connectors/api';
import SignUpForm from './../components/SignUpForm';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  onChangeUsername: value => dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'usename', value }),
  onChangeEmail: value => dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'email', value }),
  onChangePassword: value => dispatch({ type: 'UPDATE_FIELD_AUTH', key: 'password', value }),
  onSubmit: (username, email, password) => {
    const payload = registerUser(username, email, password);
    dispatch({ type: 'REGISTER_FULFILLED', payload });
  }
});

class SignUpContainer extends Component {
  constructor() {
    super();
  }

  submit = values => {
    this.props.onSubmit(values.username, values.email, values.password);
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
