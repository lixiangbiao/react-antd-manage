import React, { Component } from 'react'
import { Row, Col, Table, Button,Divider,Popconfirm} from 'antd';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from '../../store/storage'
class Enter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,//新增窗口
            editvisible:false,//编辑窗口
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
    }
    addModel() {
        // this.setState(() => ({
        //     visible: true
        // }))
    }
    editModel(record){
        // this.setState(() => ({
        //     editvisible: true
        // }))
        // this.props.editEmployee(record);
    }
    componentDidMount(){
        this.props.loadtable();
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
                    dataSource={this.props.dataSource}
                    columns={this.state.columns} />
            </div>

        )
    }
}

//redux 的store 的state的值给react的props属性
const mapStateToProps = (state, ownProps) => {
    return {
        dataSource:state.storage.dataSource
    }
}
//redux 的store 的 方法 给react的props属性
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadtable:()=>{
            dispatch(actionCreators.getEnterTable())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Enter))