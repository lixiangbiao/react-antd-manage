import React, { Component } from 'react'
import { Modal, Form, Input, DatePicker, Select,message} from 'antd';
import service from '../../../api/service'
const Option = Select.Option;
class AddEmployee extends Component {
    handleOk = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                let obj={
                    mode:'1',
                    name:values['name'],
                    phonenumber:values['phonenumber'],
                    level:values['level'],
                    email:values['email'],
                    address:values['address'],
                    date:values['date-picker'].format('YYYY-MM-DD')
                }
                service.requiresetemployee(obj).then(data=>{
                    console.log(data);
                    if(data.ERRORNO>=0){
                        message.success(data.ERRORMESSAGE)
                        this.props.form.resetFields();
                        this.props.handleCancel();
                    }else{
                        message.error(data.ERRORMESSAGE)
                    }
                })
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                md: { span: 3 },
            },
            wrapperCol: {
                md: { span: 20 },
            },
        };
        return (
            <Modal
                title="新增员工"
                width="680px"
                visible={this.props.visible}
                onOk={this.handleOk}
                onCancel={this.props.handleCancel}
            >
                <Form>
                    <Form.Item
                        {...formItemLayout}
                        label="姓名"
                    >
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: '请输入员工姓名',
                            }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item
                        {...formItemLayout}
                        label="手机号"
                    >
                        {getFieldDecorator('phonenumber', {
                            rules: [{
                                required: true, message: '请输入手机号码',
                            }, {
                                pattern: /^[1][3,4,5,7,8][0-9]{9}$/, message: '手机号码格式错误！',
                            }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="员工等级"
                    >
                        {getFieldDecorator('level', {
                            rules: [{
                                required: true, message: '请选择员工等级',
                            }],
                        })(
                            <Select
                                placeholder="请选择员工等级"
                                allowClear
                                style={{ width: '100%' }}>
                                <Option value="P1">P1</Option>
                                <Option value="P2">P2</Option>
                                <Option value="P3">P3</Option>
                            </Select>
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="邮箱"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: '邮箱格式错误！',
                            }, {
                                required: true, message: '请输入邮箱地址',
                            }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="地址"
                    >
                        {getFieldDecorator('address', {
                            rules: [{
                                required: true, message: '请输入常住地址',
                            }],
                        })(
                            <Input />
                        )}
                    </Form.Item>

                    <Form.Item
                        {...formItemLayout}
                        label="入职时间"
                    >
                        {getFieldDecorator('date-picker', {
                            rules: [{
                                type: 'object', required: true, message: '请输入入职时间',
                            }],
                        })(
                            <DatePicker />
                        )}
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}
AddEmployee = Form.create({})(AddEmployee);
export default AddEmployee