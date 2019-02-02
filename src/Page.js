import React, { Component } from 'react';
import Bfooter from './components/common/footer' //公共底部
import Bsider from './components/common/sider' //侧边菜单栏目
import Bheader from './components/common/header' //顶部菜单
import BBreadcrumb from './components/common/breadcrumb'
import { withRouter } from 'react-router-dom'
import Router from './router'  //路由信息
import './App.css'
import { Layout } from 'antd';
import { routerTitle } from './unit'
const { Content } = Layout;

class Page extends Component {
    constructor(props) {
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
    componentWillMount() {
        console.log(this.props)
        document.title = routerTitle(this.props.location.pathname)
    }
    componentDidMount() {
        //console.log(this.props)
    }
    render() {
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Layout>
                        <Bsider
                            collapsed={this.state.collapsed}
                        />
                        <Layout>
                            <Bheader
                                collapsed={this.state.collapsed}
                                toggle={this.toggle}
                            />
                            <Content style={{ margin: '0 16px' }}>
                                <BBreadcrumb />
                                <div style={{ padding: 24, background: '#fff', minHeight: 460 }}>
                                    <Router></Router>
                                </div>
                            </Content>
                            <Bfooter />
                        </Layout>
                    </Layout>

                </Layout>



            </div>

        );
    }
}


export default withRouter(Page);