import React, { Component } from 'react'
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import { connect } from 'react-redux'
import {actionCreators} from '../../store/login'
import './style.css'
class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            add:22
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.login(values)
            }
        });
    }

    //shouldComponentUpdate(nextProps, nextState){
        //const { loginStatus} = this.props;
        // console.log(nextProps)
        // console.log(nextState)
        // console.log(this.state)
        // if(nextProps.loginStatus === loginStatus){
        //     return false
        // }else{
        //     return true
        // }

        //return true
        
    //}

    componentDidUpdate() { // React 16.3+弃用componentWillReceiveProps
        const { loginStatus, history ,userName} = this.props;
        if (loginStatus) { // 判断是否登陆
            localStorage.setItem('username', JSON.stringify(userName));
            history.push('/');
        }
    }
    render() {
        //const { loginStatus ,history } = this.props;
        //if (!loginStatus) {
            const { getFieldDecorator } = this.props.form;

            return (
                <div className='bg'>
                    <div className='login'>

                        <fieldset className="login-field-title">
                            <legend className="text-white">后台管理系统登录</legend>
                        </fieldset>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入账号!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住账号</Checkbox>
                                )}
                                <a className="login-form-forgot" href="/">忘记密码</a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录</Button>
                                <span className="register">立即注册</span>
                            </Form.Item>
                        </Form>
                    </div>
                </div>

            )
            
        //} else {
            //return(
                //<Redirect from="/login" exact to="/"/>
            //)
            
        //}

    }
}
const mapStateToProps = (state) => {
    return {
        loginStatus: state.login.loginStatus,
        userName:state.login.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login:(values)=>{
            const obj={
                username:values.userName,
                password:values.password,
            }
            dispatch(actionCreators.login(obj))
        }
    }
}
Login = Form.create({})(Login);
export default connect(mapStateToProps, mapDispatchToProps)(Login)