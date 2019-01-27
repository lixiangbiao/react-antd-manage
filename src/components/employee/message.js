import React, { Component } from 'react'
import { Row, Col, Table, Button,Divider,Popconfirm,message} from 'antd';
import { withRouter } from 'react-router-dom'
import service from '../../api/service'
import AddEmployee from './message/addemployee'
import EditEmployee from './message/editemployee'
import { actionCreators } from '../../store/employee'
import { connect } from 'react-redux'
class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,//新增窗口
            editvisible:false,//编辑窗口
            dataSource:[],
            columns:[{
                title: '员工编号',
                dataIndex: 'id',
                key: 'id',
            }, {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: '员工等级',
                dataIndex: 'level',
                key: 'level',
            }, {
                title: '手机号码',
                dataIndex: 'phonenumber',
                key: 'phonenumber',
            }, {
                title: '邮箱',
                dataIndex: 'email',
                key: 'email',
            }, {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
            }, {
                title: '入职时间',
                dataIndex: 'entrytime',
                key: 'entrytime',
            }, {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                    
                        <span style={{color:'#1890ff',cursor:'pointer'}} onClick={()=>{this.editModel(record)}}>编辑</span>
                        <Divider type="vertical" />
                        <Popconfirm title="确定删除员工信息？" onConfirm={()=>{this.detele(record)}} onCancel={()=>{this.canceldetele(record)}}>
                            <span style={{color:'#1890ff',cursor:'pointer'}}>删除</span>
                        </Popconfirm>
                    </span>
                ),
            }]
        }
        this.addModel = this.addModel.bind(this);
        this.editModel = this.editModel.bind(this);
        console.log(this)
    }
    addModel() {
        this.setState(() => ({
            visible: true
        }))
    }
    editModel(record){
        this.setState(() => ({
            editvisible: true
        }))
        this.props.editEmployee(record);
    }
    detele(record){
        let obj={
            mode:'3',
            id:record.id
        }
        service.requiresetemployee(obj).then(data=>{
            if(data.ERRORNO>=0){
                message.success(data.ERRORMESSAGE)
                this.loadtable();
            }else{
                message.error(data.ERRORMESSAGE)
            }
        })
    }
    canceldetele(){
        console.log('取消')
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
        this.loadtable();
    }
    edithandleCancel = (e)=>{
        this.setState({
            editvisible: false,
        });
        this.loadtable();
    }
    componentDidMount(){
        //console.log(this.props)
        //document.title = this.props.location.query.title
        this.loadtable();
    }
    loadtable(){
        let array = [];
        service.requiregetemployee().then(data=>{
            if(data&&data.ERRORNO>=0&&data.GRID0.length>1){
                data.GRID0.shift();
                let ln = data.GRID0.length;
                for(let i=0;i<ln;i++){
                    let oData = data.GRID0[i].split('|')
                    array.push({
                        key:i,
                        id:oData[0],
                        name:oData[1],
                        level:oData[3],
                        phonenumber:oData[2],
                        email:oData[4],
                        address:oData[5],
                        entrytime:oData[6],
                    })
                }
                this.setState(()=>{
                    return{
                        dataSource:array
                    }
                })
            }
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={12} style={{ marginBottom: '10px' }}>
                        <Button type="primary" onClick={this.addModel}>新增</Button>
                    </Col>
                </Row>
                <Table
                    bordered
                    dataSource={this.state.dataSource}
                    columns={this.state.columns} />
                <AddEmployee 
                    visible = {this.state.visible}
                    handleCancel = {this.handleCancel}
                />

                <EditEmployee 
                    editvisible = {this.state.editvisible}
                    edithandleCancel = {this.edithandleCancel}
                />
            </div>

        )
    }
}
//redux 的store 的state的值给react的props属性
const mapStateToProps = (state, ownProps) => {
    return {

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
)(withRouter(Message))