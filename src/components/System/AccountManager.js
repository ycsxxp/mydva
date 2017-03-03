import React from 'react';
import { Table } from 'antd';
import styles from './AccountManager.css';

class AccountManager extends React.Component {

	render() {
		const columns = [{
			title: 'Name',
			dataIndex: 'name',
			render: text => <a href="#">{text}</a>
		}, {
			title: 'Age',
			dataIndex: 'age'
		}, {
			title: 'Address',
			dataIndex: 'address'
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
      		rowSelection={rowSelection}
      		columns={columns}
      		dataSource={data}
      		pagination={pagination}
      	/>
    	</div>
  	);
	}
}

export default AccountManager;
