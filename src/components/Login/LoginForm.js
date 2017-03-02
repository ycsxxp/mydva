import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import styles from './LoginForm.css';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
	handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
	render() {
		const { getFieldDecorator } = this.props.form;
    return (
			<div className={styles.divForm}>
    		<Form onSubmit={this.handleSubmit} className={styles.form}>
	        <FormItem>
	          {getFieldDecorator('userName', {
	            rules: [{ required: true, message: 'Please input your username!' }]
	          })(
	            <Input addonBefore={<Icon type="user" />} placeholder="Username" />
	          )}
	        </FormItem>
	        <FormItem>
	          {getFieldDecorator('password', {
	            rules: [{ required: true, message: 'Please input your Password!' }]
	          })(
	            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
	          )}
	        </FormItem>
	        <FormItem>
	          {getFieldDecorator('remember', {
	            valuePropName: 'checked',
	            initialValue: true
	          })(
	            <Checkbox>Remember me</Checkbox>
	          )}
	          <a className={styles.forgot}>Forgot password</a>
	          <Button type="primary" htmlType="submit" className={styles.loginBtn}>
	            Log in
	          </Button>
	          Or <a>register now!</a>
	        </FormItem>
	      </Form>
      </div>
    );
  }
}

const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm;
