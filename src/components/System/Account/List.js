import React from 'react'
import { Table, Modal } from 'antd'
import styles from './List.css'

const confirm = Modal.confirm

function webAccountList(props) {
	const { dataSource, fetchUser, onEditItem, onDeleteItem } = props
	const editHandler = (record) => {
		onEditItem(record)
	}
	const deleteHandler = (record) => {
		confirm({
			title: '确定要删除这条记录吗?',
			onOk() {
				onDeleteItem(record)
			}
		})
	}
	const columns = [{
		title: '姓名',
		key: 'name',
		dataIndex: 'name',
		render: text => <a href="#">{text}</a>,
		width: '25%'
	}, {
		title: '年龄',
		key: 'age',
		dataIndex: 'age',
		width: '20%'
	}, {
		title: '地址',
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
	}];
	// for (let i = 0; i < dataCount; i++) {
	// 	data.push({
	// 		key: i,
	// 		name: 'yang-' + i,
	// 		age: i + 10,
	// 		address: 'Chengdu Begonia Road No.' + i
	// 	});
	// }
	// rowSelection object indicates the need for row selection
	const rowSelection = {
	  onChange: (selectedRowKeys, selectedRows) => {
	    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	  },
	  onSelect: (record, selected, selectedRows) => {
	    console.log(record, selected, selectedRows);
	  },
	  onSelectAll: (selected, selectedRows, changeRows) => {
	    console.log(selected, selectedRows, changeRows);
	  },
	  getCheckboxProps: record => ({
	    disabled: record.name === 'Disabled User'    // Column configuration not to be checked
	  })
	};
	// 分页配置
	const pagination = {
		showSizeChanger: true,
		defaultCurrent: 1,
		total: dataSource.length,
		pageSize: 5,
		pageSizeOptions: ['5', '10', '30', '50', '100'],
		showTotal: (total, range) => `${range[0]}-${range[1]} 共 ${total} 条`
	};
	return (
  	<div className={styles.normal}>
    	<Table
    		bordered
    		rowSelection={rowSelection}
    		columns={columns}
    		rowKey={record => record.id}
    		dataSource={dataSource}
    		pagination={pagination}
    	/>
  	</div>
	);
}

export default webAccountList;