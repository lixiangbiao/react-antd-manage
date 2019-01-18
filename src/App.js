import React, { Component } from 'react';
import Bfooter from './components/common/footer' //公共底部
import Bsider from './components/common/sider' //侧边菜单栏目
import Bheader from './components/common/header' //顶部菜单

import {BrowserRouter} from 'react-router-dom'
import Router from './router'  //路由信息
import './App.css'
import {Layout, Breadcrumb} from 'antd';
const {Content} = Layout;
  
  class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        }
    }  
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }
    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
            <BrowserRouter>
                <Layout>
                    <Bsider collapsed={this.state.collapsed}/>
                    <Layout>
                        <Bheader 
                            collapsed={this.state.collapsed}
                            toggle={this.toggle}
                        />
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: 460 }}>
                                <Router></Router>
                            </div>
                        </Content>
                        <Bfooter />
                    </Layout>
                </Layout>
            </BrowserRouter>
        </Layout>
      );
    }
  }
  export default App;