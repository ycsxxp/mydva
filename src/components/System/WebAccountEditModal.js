import React from 'react';
import { Modal, Form, Input, InputNumber } from 'antd'
import styles from './WebAccountEditModal.css';

const FormItem = Form.Item

function WebAccountEditModal(props) {
	const {
		visible,
		item = {},
		onCancel,
		type,
		form: {
			getFieldDecorator
		}
	} = props
	const formItemLayout = {
	  labelCol: {
	    span: 6
	  },
	  wrapperCol: {
	    span: 14
	  }
	}
	function handleOnOk() {
		console.log('ok')
	}

	const modalProps = {
		visible: visible,
		title: type === 'create' ? '新建' : '编辑',
		onOk: handleOnOk,
		onCancel: onCancel
	}
  return (
    <Modal {...modalProps}>
    	<Form horizontal>
        <FormItem label="姓名: " hasFeedback {...formItemLayout}>
        	{getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
                message: '姓名未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem label="年龄: " hasFeedback {...formItemLayout}>
        	{getFieldDecorator('age', {
            initialValue: item.age,
            rules: [
              {
                required: true,
                message: '年龄未填写'
              }
            ]
          })(<InputNumber />)}
        </FormItem>
        <FormItem label="地址: " hasFeedback {...formItemLayout}>
        	{getFieldDecorator('address', {
            initialValue: item.address,
            rules: [
              {
                required: true,
                message: '地址未填写'
              }
            ]
          })(<Input />)}
        </FormItem>
      </Form>
    </Modal>
  );
}

export default Form.create()(WebAccountEditModal);
