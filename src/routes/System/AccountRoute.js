import React, { PropTypes } from 'react'
import { Modal } from 'antd'
import { connect } from 'dva'

import ContentInnerHeader from '../../components/Common/ContentInnerHeader'
import CommonModal from '../../components/Common/Modal'
import ContentInnerTable from '../../components/Common/ContentInnerTable'

const confirm = Modal.confirm

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

	const editHandler = (item) => {
		dispatch({
      type: 'SystemAccountModel/showModal',
      payload: {
        modalType: 'update',
        currentItem: item
      }
    })
	}
	const deleteHandler = (item) => {
		confirm({
			title: '确定要删除这条记录吗?',
			onOk() {
				dispatch({
	    		type: 'SystemAccountModel/delete',
	    		payload: {
	    			id: item.id
	    		}
	    	})
			}
		})
	}
	const columns = [
		{
			title: '地址',
			key: 'name',
			dataIndex: 'name',
			render: text => <a href="#">{text}</a>,
			width: '20%'
		}, {
			title: '年龄',
			key: 'age',
			dataIndex: 'age',
			width: '20%'
		}, {
			title: '姓名',
			key: 'address',
			dataIndex: 'address',
			width: '40%'
		}, {
			title: '操作',
			key: 'action',
			width: '10%',
			render: (text, record) => (
				<span><a href="#" onClick={() => editHandler(record)} >编辑</a><span className="ant-divider" /><a href="#" onClick={() => deleteHandler(record)} >删除</a></span>
			)
		}
	]

	const listProps = {
		columns: columns,
		dataSource: userList
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
	const CommonModalGen = () => <CommonModal {...modalProps} />

	return (
		<div className="content-inner">
			<ContentInnerHeader {...headerProps} />
			<ContentInnerTable {...listProps} />
			<CommonModalGen />
		</div>
	)
}
AccountRoute.propsTypes = {
	dispatch: PropTypes.func.isRequire
}
export default connect(({ SystemAccountModel }) => ({ SystemAccountModel }))(AccountRoute)
