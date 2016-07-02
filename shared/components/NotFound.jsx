import React from 'react';
import Helmet from 'react-helmet';

const NotFound = () =>
  <section>
    <Helmet
      title="404"
      titleTemplate="%s | Page Not Found"
    />
    <div className="text-center">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12">
          <div className="not-found">
            <h1>404 :(</h1>
            <h2>Page Not Found</h2>
          </div>
        </div>
      </div>
    </div>
  </section>;

export default NotFound;
