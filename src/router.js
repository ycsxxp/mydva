import React from 'react';
import { Router } from 'dva/router';
import Nfapp from './routes/nfapp';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      component: Nfapp,
      getIndexRoute(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/dashboard'))
          cb(null, require('./routes/dashboard'))
        }, 'dashboard')
      },
      childRoutes: [
        {
          path: 'dashboard',
          name: 'dashboard',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/dashboard'))
            }, 'dashboard')
          }
        }
      ]
    }
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   getComponent(nextState, cb) {
    //     require.ensure([], (require) => {
    //       cb(null, require('./routes/dashboard'))
    //     })
    //   }
    // }
  ];
  return <Router history={history} routes={routes} />;
}

export default RouterConfig;
