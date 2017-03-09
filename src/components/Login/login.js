import React, { PropTypes } from 'react';
// import { connect } from 'dva';
import { Form, Input, Icon, Checkbox, Button } from 'antd'
import styles from './login.css';

const FormItem = Form.Item

function Login(props) {
	function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.doLogin(values)
      }
    });
  }
	const { getFieldDecorator } = props.form;
	return (
    <div className={styles.divForm}>
  		<Form onSubmit={handleSubmit} className={styles.form}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }]
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }]
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(
            <Checkbox>记住我</Checkbox>
          )}
          {
          	// <a lassName={styles.forgot}>Forgot password</a>
        	}
          <Button type="primary" htmlType="submit" className={styles.loginBtn} loading={props.loginButtonLoading} >
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}

Login.propTypes = {
  // form: PropTypes.object,
  // loginButtonLoading: PropTypes.bool,
  // doLogin: PropTypes.func
}

export default Form.create()(Login);
