import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import Layout from 'F:/lvmeng/QS_React/umi-api/layouts/index.js';


let Router = DefaultRouter;


export default function() {
  return (
<Router history={window.g_history}>
  <Layout><Switch>
    <Route exact path="/404" component={() => React.createElement(require('C:/Users/A456-930MX/AppData/Roaming/npm/node_modules/umi/node_modules/_umi-build-dev@0.10.6@umi-build-dev/lib/Compiling.js').default, { route: '/404' })} />
    <Route exact path="/Home" component={require('../Home/page.jsx').default} />
    <Route exact path="/" component={() => React.createElement(require('C:/Users/A456-930MX/AppData/Roaming/npm/node_modules/umi/node_modules/_umi-build-dev@0.10.6@umi-build-dev/lib/Compiling.js').default, { route: '/' })} />
    <Route exact path="/list" component={() => React.createElement(require('C:/Users/A456-930MX/AppData/Roaming/npm/node_modules/umi/node_modules/_umi-build-dev@0.10.6@umi-build-dev/lib/Compiling.js').default, { route: '/list' })} />
    <Route component={require('F:/lvmeng/QS_React/umi-api/pages/404.js').default} />
  </Switch></Layout>
</Router>
  );
}
