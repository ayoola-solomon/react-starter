import React, { Component, PropTypes } from 'react';
import Helmet         from 'react-helmet';
import { connect }    from 'react-redux';
import * as action from '../actions/welcome';

class Home extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    welcome:  PropTypes.object.isRequired,
  }

  componentDidMount() {
   this.props.dispatch(action.setWelcomeText())
  }

  render() {
    const { text } = this.props.welcome;
    return (
      <section>
        <Helmet
          title="Home"
          titleTemplate="%s | React Redux Isomorphic Starter"
        />
        <div className="row welcome">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <div className="jumbotron">
              <h1 className="text-center">
                {text}
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({ welcome: state.default.welcome });

export default connect(mapStateToProps)(Home);
