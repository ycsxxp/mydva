
export default {
  namespace: 'SystemWebAccountModel',
  state: {
  	modalVisible: false,
  	modalType: 'create',
  	currentItem: {}
  },
  reducers: {
  	showModal(state, action) {
  		return { ...state, ...action.payload, modalVisible: true }
  	},
  	hideModal(state, action) {
  		return { ...state, ...action.payload, modalVisible: false }
  	}
  },
  effects: {
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
  subscriptions: {}
};
