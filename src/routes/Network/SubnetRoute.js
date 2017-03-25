import React from 'react'
import { Modal } from 'antd'
import { connect } from 'dva'

import ContentInnerHeader from '../../components/Common/ContentInnerHeader'
import ContentInnerTable from '../../components/Common/ContentInnerTable'
import SubnetModal from '../../components/Network/Subnet/Modal'

const confirm = Modal.confirm

function SubnetRoute({ location, dispatch, NetworkSubnetModel }) {
	const { subnetList, modalVisible, modalType, currentItem } = NetworkSubnetModel
	const headerProps = {
		onAdd() {
			dispatch({
				type: 'NetworkSubnetModel/showModal',
				payload: {
					modalType: 'create'
				}
			})
		}
	}
	const editHandler = (item) => {
		dispatch({
      type: 'NetworkSubnetModel/showModal',
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
	    		type: 'NetworkSubnetModel/delete',
	    		payload: {
	    			id: item.id
	    		}
	    	})
			}
		})
	}

	const columns = [
		{
			title: '名称',
			key: 'name',
			dataIndex: 'name',
			render: text => <a href="#">{text}</a>,
			width: '20%'
		}, {
			title: 'IP',
			key: 'ip',
			dataIndex: 'ip',
			width: '20%'
		}, {
			title: '网关',
			key: 'network',
			dataIndex: 'network',
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
		dataSource: subnetList
	}
	const modalProps = {
		item: modalType === 'create' ? {} : currentItem,
    type: modalType,
		visible: modalVisible,
		handleOk(data) {
      dispatch({
        type: `NetworkSubnetModel/${modalType}`,
        payload: data
      })
    },
    onCancel() {
      dispatch({
        type: 'NetworkSubnetModel/hideModal'
      })
    }
	}

	// <Modal /> 组件有标准的 React 生命周期，关闭后状态不会自动清空。
	// 如果希望每次打开都是新内容，需要自行手动清空旧的状态或者打开时给 Modal 设置一个全新的 key。React会渲染出一个全新的对话框。
	// 该方法会重新生成一个对话框 相当于设置了全新key
	const SubnetModalGen = () => <SubnetModal {...modalProps} />

	return (
		<div className="content-inner">
			<ContentInnerHeader {...headerProps} />
			<ContentInnerTable {...listProps} />
			<SubnetModalGen />
		</div>
	)
}

export default connect(({ NetworkSubnetModel }) => ({ NetworkSubnetModel }))(SubnetRoute)
