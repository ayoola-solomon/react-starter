import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Footer from './Footer';

class App extends Component {

  static propTypes = {
    children:       PropTypes.object.isRequired,
    dispatch:       PropTypes.func.isRequired
  }

  render() {
    return (
      <div id="app-view">
        <NavBar dispatch={this.props.dispatch}/>
        { this.props.children }
        <Footer/>
      </div>
    );
  }
}

export default connect()(App);
