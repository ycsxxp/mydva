import { parse } from 'qs'
import { subnetList, createSubnet, updateSubnet, deleteSubnet } from '../../services/Network/SubnetService'

export default {
	namespace: 'NetworkSubnetModel',
	state: {
		subnetList: [],
		modalVisible: false,
  	modalType: 'create',
  	currentItem: {}
	},
	subscriptions: {
		setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/object-network-subnet') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    }
	},
	effects: {
		*fetch({ payload }, { call, put }) {
  		const ret = yield call(subnetList, payload)
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
      console.log(payload)
      const { res } = yield call(createSubnet, payload)
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
      const id = yield select(({ NetworkSubnetModel }) => NetworkSubnetModel.currentItem.id)
      const newData = { ...payload, id }
      const { res } = yield call(updateSubnet, newData)
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
    *delete({ payload }, { call, put }) {
      yield put({ type: 'hideModal' })
      // yield put({ type: 'showLoading' })
      const { res } = yield call(deleteSubnet, payload)
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
    }
	},
	reducers: {
		fetchOk(state, action) {
			const { list } = action.payload
			return { ...state, subnetList: list }
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
        subnetList: list,
        loading: false
        // pagination: {
        //   ...state.pagination,
        //   ...pagination
        // }
      }
    }
	}
}
