import { parse } from 'qs'
import { login, logout } from '../services/nfapp'

export default {
  namespace: 'nfapp',
  state: {
    loginStatus: false,
    siderCollapsed: false
    // loading: false,
    // user: {
    //   name: '吴彦祖'
    // },
    // loginButtonLoading: false,
    // menuPopoverVisible: false,
    // siderFold: localStorage.getItem('antdAdminSiderFold') === 'true',
    // darkTheme: localStorage.getItem('antdAdminDarkTheme') !== 'false',
    // isNavbar: document.body.clientWidth < 769
  },
  effects: {
  	*login({ payload }, { call, put }) {
      yield put({ type: 'showLoginButtonLoading' })
      const { data } = yield call(login, parse(payload))
      if (data.success) {
        yield put({
        	type: 'loginSuccess',
          payload: {
            user: {
              name: payload.username
            }
          }
        })
      } else {
        yield put({
          type: 'loginFail',
          payload: {
            msg: data.message
          }
        })
      }
    },
    *logout({ payload }, { call, put }) {
      yield put({ type: 'showLoginButtonLoading' })
      const { data } = yield call(logout, parse(payload))
      if (data.success) {
        yield put({
          type: 'logoutSuccess'
        })
      } else {
        yield put({
          type: 'loginFail'
        })
      }
    },
    *toggleSider({ payload }, { call, put }) {
      yield put({ type: 'toggleSiderDone' })
    }
  },
  reducers: {
  	loginSuccess(state, action) {
      return {
        ...state,
        ...action.payload,
        loginStatus: true
        // loginButtonLoading: false
      }
    },
    loginFail(state, action) {
      return {
        ...state,
        ...action.payload,
        loginStatus: false
        // loginButtonLoading: false
      }
    },
    logoutSuccess(state) {
      return {
        ...state,
        loginStatus: false
      }
    },
    toggleSiderDone(state) {
      return {
        ...state,
        siderCollapsed: !state.siderCollapsed
      }
    }
  },
  subscriptions: {}
};
