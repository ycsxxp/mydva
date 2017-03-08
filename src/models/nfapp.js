import { parse } from 'qs'
import { login } from '../services/nfapp'

export default {
  namespace: 'nfapp',
  state: {
    loginStatus: false
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
          type: 'loginFail'
        })
      }
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
    }
  },
  subscriptions: {}
};
