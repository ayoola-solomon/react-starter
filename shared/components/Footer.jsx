import React from 'react';
import { connect } from 'react-redux';

const Footer = () =>
<footer>
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-sm-4 col-md-4">
        <h3 className="lead">
          <strong>React Redux Isomorphic Starter</strong>
        </h3>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-4 col-md-4">
        <p>Copyright © Ayoola Solomon 2016 </p>
      </div>
    </div>
  </div>
</footer>;

export default connect()(Footer);
