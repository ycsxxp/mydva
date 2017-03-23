import React, { PropTypes } from 'react'
import { connect } from 'dva'

import AccountHeader from '../../components/System/Account/Header'
import AccountModal from '../../components/System/Account/Modal'
import AccountList from '../../components/System/Account/List'


function AccountRoute({ location, dispatch, SystemAccountModel }) {
	const { userList, modalVisible, modalType, currentItem } = SystemAccountModel
	const headerProps = {
		onAdd() {
			dispatch({
				type: 'SystemAccountModel/showModal',
				payload: {
					modalType: 'create'
				}
			})
		}
	}
	const listProps = {
		dataSource: userList,
		fetchUser() {
			dispatch({
				type: 'SystemAccountModel/fetch'
			})
		},
		onEditItem(item) {
      dispatch({
        type: 'SystemAccountModel/showModal',
        payload: {
          modalType: 'update',
          currentItem: item
        }
      })
    },
    onDeleteItem(item) {
    	dispatch({
    		type: 'SystemAccountModel/delete',
    		payload: {
    			id: item.id
    		}
    	})
    }
	}
	const modalProps = {
		item: modalType === 'create' ? {} : currentItem,
    type: modalType,
		visible: modalVisible,
		handleOk(data) {
      dispatch({
        type: `SystemAccountModel/${modalType}`,
        payload: data
      })
    },
    onCancel() {
      dispatch({
        type: 'SystemAccountModel/hideModal'
      })
    }
	}

	// <Modal /> 组件有标准的 React 生命周期，关闭后状态不会自动清空。
	// 如果希望每次打开都是新内容，需要自行手动清空旧的状态或者打开时给 Modal 设置一个全新的 key。React会渲染出一个全新的对话框。
	// 该方法会重新生成一个对话框 相当于设置了全新key
	const AccountModalGen = () => <AccountModal {...modalProps} />

	return (
		<div className="content-inner">
			<AccountHeader {...headerProps} />
			<AccountList {...listProps} />
			<AccountModalGen />
		</div>
	)
}
AccountRoute.propsTypes = {
	dispatch: PropTypes.func.isRequire
}
export default connect(({ SystemAccountModel }) => ({ SystemAccountModel }))(AccountRoute)
