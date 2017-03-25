import React from 'react'
import { Modal, Form, Input } from 'antd'

const FormItem = Form.Item

function SubnetModal(porps) {
	const { visible, type, handleOk, onCancel, form, item = {} } = porps
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
				<FormItem label="名称" hasFeedback {...formItemLayout} >
					{
						getFieldDecorator('name', {
							initialValue: item.name,
							rules: [{
								required: true,
                message: '名称未填写'
							}]
						})(<Input />)
					}
				</FormItem>
				<FormItem label="IP" hasFeedback {...formItemLayout} >
					{
						getFieldDecorator('ip', {
							initialValue: item.ip,
							rules: [{
								required: true,
                message: 'IP未填写'
							}]
						})(<Input />)
					}
				</FormItem>
				<FormItem label="网关" hasFeedback {...formItemLayout} >
					{
						getFieldDecorator('network', {
							initialValue: item.network,
							rules: [{
								required: true,
                message: '网关未填写'
							}]
						})(<Input />)
					}
				</FormItem>
			</Form>
		</Modal>
	)
}

export default Form.create()(SubnetModal);
