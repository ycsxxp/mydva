import React from 'react';
import { Form, Input, InputNumber, Popover } from 'antd';

import styles from './AccountParamsSet.css';

const FormItem = Form.Item;

function onChange(value) {
  console.log('changed', value);
}
class AccountParamsSetForm extends React.Component {

	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 4 }
    };
    const content = (
  		<div>
    		<p>Content</p>
    		<p>Content</p>
  		</div>
		);
    // const tailFormItemLayout = {
    //   wrapperCol: {
    //     span: 12,
    //     offset: 6,
    //   },
    // };
		return (
		    <Form className={styles.normal}>
		    	<FormItem {...formItemLayout} label="登录验证失败次数" >
		    		{ getFieldDecorator('failed_times', { initialValue: 3 })(
	            <InputNumber min={1} max={10} onChange={onChange} />
	          ) }
		    	</FormItem>
		    	<FormItem {...formItemLayout} label="登录验证失败锁定时间" >
		    		{ getFieldDecorator('lock_minute', { initialValue: 4 })(
	            <InputNumber min={1} max={10} onChange={onChange} />
	          ) }
	          <span>分钟</span>
		    	</FormItem>
		    	<FormItem {...formItemLayout} label="LDAP认证服务器" hasFeedback >
		    		<Popover content={content} title="Title" trigger="hover">
		    		{ getFieldDecorator('ldap_server', {
		    				rules: [{
		    					type: 'string',
		    					pattern: /^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/,
		    					message: '认证服务器格式错误'
		    			}, {
		    				required: true, message: '不能为空!'
		    			}]
		    		})(
		    				<Input />
		    		) }
		    		</Popover>
		    	</FormItem>
		    </Form>
	  );
	}
}
const AccountParamsSet = Form.create()(AccountParamsSetForm);
export default AccountParamsSet;
