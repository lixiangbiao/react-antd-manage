import React, { Component } from 'react'
import { Table } from 'antd';
import { withRouter } from 'react-router-dom'
const dataSource = [{
    key: '1',
    id: '1',
    name: '周杰伦',
    level: 'P2',
    phonenumber:'1308888888',
    email:'lixbiao@126.com',
    address:'西湖区支付宝大楼',
    entrytime:'2016-03-02',
}, {
    key: '2',
    id: '2',
    name: '吴彦祖',
    level: 'P2',
    phonenumber:'1308888888',
    email:'lixbiao@126.com',
    address:'西湖区支付宝大楼',
    entrytime:'2016-03-02',
}];
const columns = [{
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
}];

class Home extends Component {

    render() {
        return (
            <div>
                <Table  
                    bordered
                    dataSource={dataSource} 
                    columns={columns} />
            </div>

        )
    }
}

export default withRouter(Home)