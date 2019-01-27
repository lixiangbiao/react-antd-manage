import React, { Component } from 'react'
import { Row, Col, Table, Select, Input ,Button,Divider,Popconfirm} from 'antd';
const Option = Select.Option;
const Search = Input.Search;
class Cmessage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [{
                title: '编号',
                dataIndex: 'id',
                key: 'id',
            }, {
                title: '商品编号',
                dataIndex: 'goodsid',
                key: 'goodsid',
            }, {
                title: '商品名称',
                dataIndex: 'goodsname',
                key: 'goodsname',
            }, {
                title: '仓库名称',
                dataIndex: 'storagename',
                key: 'storagename',
            }, {
                title: '商品数量',
                dataIndex: 'goodsnumber',
                key: 'goodsnumber',
            }, {
                title: '商品价格',
                dataIndex: 'goodsprice',
                key: 'goodsprice',
            }, {
                title: '商品总金额',
                dataIndex: 'goodssum',
                key: 'goodssum',
            }, {
                title: '备注',
                dataIndex: 'remark',
                key: 'remark',
            }, {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                    
                        <span style={{color:'#1890ff',cursor:'pointer'}} onClick={()=>{this.editModel(record)}}>编辑</span>
                        <Divider type="vertical" />
                        <Popconfirm title="确定删除入库信息？" onConfirm={()=>{this.detele(record)}} onCancel={()=>{this.canceldetele(record)}}>
                            <span style={{color:'#1890ff',cursor:'pointer'}}>删除</span>
                        </Popconfirm>
                    </span>
                ),
            }],
            dataSource: [{
                key: '1',
                id: '1',
                goodsid: '800826',
                goodsname: '儿童袜',
                storagename: '绍兴仓库',
                goodsnumber: 1000,
                goodsprice: 2.42,
                goodssum: 2420,
                remark: '绍兴市仓库袜子',
            },]
        }

        this.handleChange = this.handleChange.bind(this);
        this.hanleSearch = this.hanleSearch.bind(this);
        this.addModel = this.addModel.bind(this);
        this.editModel = this.editModel.bind(this);
    }

    handleChange(value) {
        console.log('selected' + value)
    }

    hanleSearch(value){
        console.log('search' + value)
    }
    addModel(){

    }
    editModel(record){
        console.log(record)
    }
    detele(record){
        console.log(record)
    }
    canceldetele(record){
        console.log(record)
    }
    render() {
        return (
            <div>
                <Row >
                    <Col span={12} >
                        <Button type="primary" onClick={this.addModel}>客户信息新增</Button>
                    </Col>
                    <Col span={12} style={{ marginBottom: '10px', textAlign: 'right' }}>
                        
                        <Select
                            defaultValue="lucy"
                            style={{ width: 120,marginRight:20}}
                            placeholder="搜索选项"
                            onChange={this.handleChange}>
                            <Option value="jack">商品编号</Option>
                            <Option value="lucy">商品名称</Option>
                            <Option value="disabled">仓库名称</Option>
                        </Select>

                        <Search
                            style={{ width: 200 }}
                            placeholder="搜索内容"
                            onSearch={this.hanleSearch}
                            enterButton
                        />

                    </Col>
                </Row>
                <Table
                    bordered
                    dataSource={this.state.dataSource}
                    columns={this.state.columns} />
            </div>

        )
    }
}

export default Cmessage