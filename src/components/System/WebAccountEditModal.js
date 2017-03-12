import React from 'react';
import { Modal, Form, Input } from 'antd'
import styles from './WebAccountEditModal.css';

const FormItem = Form.Item

function WebAccountEditModal({
	visible,
	item = {},
	onCancel,
	form: {
		getFieldDecorator
	}
}) {
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
		title: '编辑',
		onOk: handleOnOk,
		onCancel: onCancel
	}
  return (
    <Modal {...modalProps}>
    	<Form horizontal>
        <FormItem label="姓名：" hasFeedback {...formItemLayout}>
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
      </Form>
    </Modal>
  );
}

export default Form.create()(WebAccountEditModal);
