import React, { Component } from 'react';
import Header from 'components/Header';

class App extends Component {
  render() {
    return(
      <div className="app-container">
        <Header />
        <div className="main-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default App;
