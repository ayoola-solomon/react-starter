import React     from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'components';
import Home from 'components/Home';
import NotFound from 'components/NotFound';

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="*" component={NotFound}/>
  </Route>
);

export default routes;
