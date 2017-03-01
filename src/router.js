import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import LoginPage from "./routes/LoginPage.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={LoginPage} />
      <Route path="/index" component={IndexPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/LoginPage" component={LoginPage} />
      <Route path="/products" component={Products} />
    </Router>
  );
}

export default RouterConfig;
