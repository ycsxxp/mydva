import React from 'react';
import { Form, Input, InputNumber, Select, Checkbox, Button } from 'antd';


// 	
// 3
// (分钟)	
// 3
// 登录多次失败后的处理方式	 锁定用户	系统默认开启锁定IP地址功能
// 最小密码长度	
// 10
// 密码复杂度	
// 2
	 
// 操作空闲退出时间(秒)	
// 300
// LDAP 认证服务器	
// 0.0.0.0
// Radius 认证服务器	
// 0.0.0.0
// Radius 认证端口	
// 1812
// Radius 认证方式	
// Radius 认证共享密钥	
// •••
//  	确定
import styles from './AccountParamsSet.css';

const FormItem = Form.Item;

class AccountParamsSetForm extends React.Component {

	render() {
		const { getFieldDecorator } = this.props.form;	
		const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    };
		return (
		    <Form className={styles.normal}>
		    	<FormItem {...formItemLayout} label="登录验证失败次数" >
		    		{getFieldDecorator('input-number', { initialValue: 3})(
	            <InputNumber min={1} max={10} />
	          )}
		    	</FormItem>
		    	<FormItem {...formItemLayout} label="登录验证失败锁定时间" >
		    		{getFieldDecorator('input-number', { initialValue: 3})(
	            <InputNumber min={1} max={10} />
	          )}
	          <span>分钟</span>
		    	</FormItem>
		    </Form>
	  );
	}
}
const AccountParamsSet = Form.create()(AccountParamsSetForm);
export default AccountParamsSet;
