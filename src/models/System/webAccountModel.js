import { parse } from 'qs'
import { fetchUser, createAccount } from '../../services/system/AccountService'

export default {
  namespace: 'SystemAccountModel',
  state: {
  	userList: [],
  	modalVisible: false,
  	modalType: 'create',
  	currentItem: {}
  },
  subscriptions: {
  	setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/system-account-webAccount') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    }
  },
  effects: {
  	*fetch({ payload }, { call, put }) {
  		const ret = yield call(fetchUser, payload)
  		if(ret) {
  			yield put({
  				type: 'fetchOk',
  				payload: {
  					list: ret.res
  				}
  			})
  		}
  	},
  	*create({ payload }, { call, put }) {
      yield put({ type: 'hideModal' })
      // yield put({ type: 'showLoading' })
      const { res } = yield call(createAccount, payload)
      if (res && res.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: res.data
            // pagination: {
            //   total: res.page.total,
            //   current: res.page.current
            // }
          }
        })
      }
    },
  	*update({ payload }, { select, call, put }) {
      yield put({ type: 'hideModal' })
      // yield put({ type: 'showLoading' })
      const id = yield select(({ users }) => users.currentItem.id)
      const newUser = { ...payload, id }
      const res = yield call(update, newUser)
      if (res && res.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: res.data,
            pagination: {
              total: res.page.total,
              current: res.page.current
            }
          }
        })
      }
    }
  },
  reducers: {
  	fetchOk(state, action) {
      const { list } = action.payload
      return { ...state,
        userList: list
      }
    },
  	showModal(state, action) {
  		return { ...state, ...action.payload, modalVisible: true }
  	},
  	hideModal(state, action) {
  		return { ...state, modalVisible: false }
  	},
    querySuccess(state, action) {
      const { list } = action.payload
      return { ...state,
        userList: list,
        loading: false
        // pagination: {
        //   ...state.pagination,
        //   ...pagination
        // }
      }
    }
  }
};
