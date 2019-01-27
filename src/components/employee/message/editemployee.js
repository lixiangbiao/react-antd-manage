import React, { Component } from 'react'
import { Modal, Form, Input, DatePicker, Select,message} from 'antd';
import service from '../../../api/service'
import { actionCreators }from '../../../store/employee'
import moment from 'moment';
import { connect } from 'react-redux'
const Option = Select.Option;
class EditEmployee extends Component {
    handleOk = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                let obj={
                    mode:'2',
                    name:values['name'],
                    phonenumber:values['phonenumber'],
                    level:values['level'],
                    email:values['email'],
                    address:values['address'],
                    date:values['date-picker'].format('YYYY-MM-DD'),
                    id:this.props.editid
                }
                service.requiresetemployee(obj).then(data=>{
                    console.log(data);
                    if(data.ERRORNO>=0){
                        message.success(data.ERRORMESSAGE)
                        this.props.form.resetFields();
                        this.props.editEmployee({});
                        this.props.edithandleCancel();
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
                title="编辑员工"
                width="680px"
                visible={this.props.editvisible}
                onOk={this.handleOk}
                onCancel={this.props.edithandleCancel}
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
EditEmployee = Form.create({
    //当Form.Item子节点的值发生改变时触发，可以把对应的值转存到 Redux store
    onFieldsChange(props,changedFields) {
        for(let key in changedFields){
            props.editmployee[key] = changedFields[key]['value']
        }
        //console.log(props)
        props.editEmployee(props.editmployee)
    },
    //把 props 转为对应的值，可用于把 Redux store 中的值读出,可以在此给form赋值
    mapPropsToFields(props) {
        //console.log(props)
        return{
            name: Form.createFormField({
                value: props.editmployee.name,
            }),
            phonenumber: Form.createFormField({
                value: props.editmployee.phonenumber,
            }),
            level: Form.createFormField({
                value: props.editmployee.level,
            }),
            email: Form.createFormField({
                value: props.editmployee.email,
            }),
            address: Form.createFormField({
                value: props.editmployee.address,
            }),
            'date-picker': Form.createFormField({
                value: moment(props.editmployee.entrytime,'YYYY-MM-DD')
            }),
        }
    },
    //任一表单域的值发生改变时的回调
    onValuesChange(_,values) {
        //console.log(values)
    }
})(EditEmployee);


//redux 的store 的state的值给react的props属性
const mapStateToProps = (state, ownProps) => {
    return {
        editmployee:state.employee.editmployee,
        editid:state.employee.editmployee.id
    }
}

//redux 的store 的 方法 给react的props属性
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editEmployee:(obj)=>{
            let action = actionCreators.setEditMployee(obj)
            dispatch(action)
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditEmployee)