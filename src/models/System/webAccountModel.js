import { parse } from 'qs'
import { fetchUser } from '../../services/system/webAccountService'

export default {
  namespace: 'SystemWebAccountModel',
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
  		const data = yield call(fetchUser, payload)
  		if(data) {
  			yield put({
  				type: 'fetchOk',
  				payload: {
  					list: data.data
  				}
  			})
  		}
  	},
  	*create({ payload }, { call, put }) {
      yield put({ type: 'hideModal' })
      // yield put({ type: 'showLoading' })
      const data = yield call(create, payload)
      if (data && data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              total: data.page.total,
              current: data.page.current
            }
          }
        })
      }
    },
  	*update({ payload }, { select, call, put }) {
      yield put({ type: 'hideModal' })
      // yield put({ type: 'showLoading' })
      const id = yield select(({ users }) => users.currentItem.id)
      const newUser = { ...payload, id }
      const data = yield call(update, newUser)
      if (data && data.success) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            pagination: {
              total: data.page.total,
              current: data.page.current
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
  		return { ...state, ...action.payload, modalVisible: false }
  	}
  }
};
