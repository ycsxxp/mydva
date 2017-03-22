import React from 'react'
import { Modal, Form, Input, InputNumber } from 'antd'
import styles from './Modal.js'

const FormItem = Form.Item

function WebAccountModal(props) {
	const { visible, item = {}, type, form, handleOk, onCancel } = props
	const { getFieldDecorator, validateFieldsAndScroll } = form
	const formItemLayout = {
	  labelCol: {
	    span: 6
	  },
	  wrapperCol: {
	    span: 14
	  }
	}
	function handleOnOk() {
		validateFieldsAndScroll((errors, values) => {
			if(errors) {
				return false
			}else {
				handleOk(values)
			}
		})
	}
	const modalProps = {
		visible: visible,
		title: type === 'create' ? '新建' : '编辑',
		onOk: handleOnOk,
		onCancel: onCancel,
		wrapClassName: 'vertical-center-modal'
	}
	return (
		<Modal {...modalProps}>
			<Form>
				<FormItem label="姓名: " hasFeedback {...formItemLayout}>
					{
						getFieldDecorator('name', {
							initialValue: item.name,
							rules: [{
								required: true,
                message: '姓名未填写'
							}]
						})(<Input />)
					}
				</FormItem>
				<FormItem label="年龄: " hasFeedback {...formItemLayout}>
        	{
        		getFieldDecorator('age', {
	            initialValue: item.age,
	            rules: [{
	            	required: true,
	            	message: '年龄未填写'
	            }]
	          })(<InputNumber />)
        	}
        </FormItem>
        <FormItem label="地址: " hasFeedback {...formItemLayout}>
        	{
        		getFieldDecorator('address', {
	            initialValue: item.address,
	            rules: [{
	            	required: true,
	            	message: '地址未填写'
	            }]
	          })(<Input />)
	        }
        </FormItem>
			</Form>
		</Modal>
	)
}

export default Form.create()(WebAccountModal);
