import React, { PropTypes } from 'react'
import { connect } from 'dva'

import WebAccountHeader from '../../components/System/WebAccount/Header'
import WebAccountComponent from '../../components/System/webAccount'
import EditModalComponent from '../../components/System/WebAccountEditModal'

function WebAccount({ location, dispatch, SystemWebAccountModel }) {
	const { userList, modalVisible, modalType, currentItem } = SystemWebAccountModel
	const headerProps = {
		onAdd() {
			dispatch({
				type: 'SystemWebAccountModel/showModal',
				payload: {
					modalType: 'create'
				}
			})
		}
	}
	const webAccountProps = {
		dataSource: userList,
		fetchUser() {
			dispatch({
				type: 'SystemWebAccountModel/fetch'
			})
		},
		onEditItem(item) {
      dispatch({
        type: 'SystemWebAccountModel/showModal',
        payload: {
          modalType: 'update',
          currentItem: item
        }
      })
    }
	}
	const modalProps = {
		item: modalType === 'create' ? {} : currentItem,
    type: modalType,
		visible: modalVisible,
		onOk(data) {
      dispatch({
        type: `SystemWebAccountModel/${modalType}`,
        payload: data
      })
    },
    onCancel() {
      dispatch({
        type: 'SystemWebAccountModel/hideModal'
      })
    }
	}
	return (
		<div className="content-inner">
			<WebAccountHeader {...headerProps} />
			<WebAccountComponent {...webAccountProps} />
			<EditModalComponent {...modalProps} />
		</div>
	)
}
WebAccount.propsTypes = {
	dispatch: PropTypes.func.isRequire
}
export default connect(({ SystemWebAccountModel }) => ({ SystemWebAccountModel }))(WebAccount)
