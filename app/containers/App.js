import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from 'components/Header';

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  }
};
const mapStateToDispatch = dispatch => ({
  onClickLogout: () => dispatch({ type: 'LOGOUT' })
});

class App extends Component {
  /**
   * Handle the logout action.
   *
   * @param event
   */
  handleClickLogout = event => {
    event.preventDefault();
    this.props.onClickLogout();
  };

  /**
   * Render the application.
   */
  render() {
    return (
      <div className="app-container">
        <Header currentUser={this.props.currentUser} onClick={this.handleClickLogout}/>
        <div className="main-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(App));
