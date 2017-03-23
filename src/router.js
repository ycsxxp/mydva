import React from 'react';
import { Router } from 'dva/router';
// import Nfapp from './routes/nfapp';

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const rootRoute = [
    {
      path: '/',
      indexRoute: {
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            cb(null, require('./routes/home/status'))
          }, 'status')
        }
      },
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/nfapp'))
        }, 'nfapp')
      },
      childRoutes: [
        {
          path: 'home-status',
          name: 'status',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/home/status'))
            }, 'status')
          }
        },
        {
          path: 'home-event',
          name: 'event',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./routes/home/event'))
            }, 'event')
          }
        },
        {
          path: 'system-account-account',
          name: 'Account',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/System/AccountModel'));
              cb(null, require('./routes/System/AccountRoute'))
            }, 'Account')
          }
        },
        {
          path: 'system-account-params',
          name: 'Params',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              // registerModel(app, require('./models/System/Model'));
              cb(null, require('./routes/System/ParamsRoute'))
            }, 'Params')
          }
        },
        {
          path: 'object-network-subnet',
          name: 'Subnet',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('./models/System/AccountModel'));
              cb(null, require('./routes/Network/SubnetRoute'))
            }, 'Subnet')
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
  return <Router history={history} routes={rootRoute} />;
}

export default RouterConfig;
