import React from 'react';
import { Table } from 'antd';
import styles from './webAccount.css';

function webAccount(props) {
	const editHandler = (record) => {
		props.onEditItem(record)
	}
	const columns = [{
		title: 'Name',
		key: 'name',
		dataIndex: 'name',
		render: text => <a href="#">{text}</a>
	}, {
		title: 'Age',
		key: 'age',
		dataIndex: 'age'
	}, {
		title: 'Address',
		key: 'address',
		dataIndex: 'address'
	}, {
		title: '操作',
		key: 'action',
		width: 100,
		render: (text, record) => (
			<span><a href="#" onClick={() => editHandler(record)} >编辑</a><span className="ant-divider" /><a>删除</a></span>
		)
	}];
	const dataCount = 100;
	const data = [];
	for (let i = 0; i < dataCount; i++) {
		data.push({
			key: i,
			name: 'yang-' + i,
			age: i + 10,
			address: 'Chengdu Begonia Road No.' + i
		});
	}
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
		total: dataCount,
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
    		dataSource={data}
    		pagination={pagination}
    	/>
  	</div>
	);
}

export default webAccount;
