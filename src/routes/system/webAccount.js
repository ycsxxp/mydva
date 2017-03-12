import React, { PropTypes } from 'react'
import { connect } from 'dva'
import WebAccountComponent from '../../components/System/webAccount'
import EditModalComponent from '../../components/System/WebAccountEditModal'

function WebAccount({ location, dispatch, SystemWebAccountModel }) {
	const { modalVisible, modalType, currentItem } = SystemWebAccountModel
	console.log(modalVisible)
	const webAccountProps = {
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
		item: currentItem,
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
		<div>
			<WebAccountComponent {...webAccountProps} />
			<EditModalComponent {...modalProps} />
		</div>
	)
}
WebAccount.propsTypes = {
	dispatch: PropTypes.func.isRequire
}
export default connect(({ SystemWebAccountModel }) => ({ SystemWebAccountModel }))(WebAccount)
