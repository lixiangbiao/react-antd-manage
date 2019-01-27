import React from 'react'
import { Layout, Menu, Icon, } from 'antd';
import { Link ,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const  Bsider = withRouter((props) => {
    return(
        <Sider
                trigger={null}
                collapsible
                collapsed={props.collapsed}
            >
                <div className="layout-logo">
                    <a href="/home">
                        <img alt="" className="logo-img" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
                        <span className="logo-text">管理系统</span>
                    </a>
                </div>
                <Menu theme="dark" 
                    defaultSelectedKeys={['/']}
                    selectedKeys={[props.location.pathname]}
                    mode="inline">
                    <Menu.Item key="/">
                        <Link to="/">
                            <Icon type="home" />
                            <span>管理首页</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="/storage"
                        title={<span><Icon type="shopping" /><span>仓库管理</span></span>}
                    >
                        <Menu.Item key="/storage/enter"><Link to="/storage/enter">入库单</Link></Menu.Item>
                        <Menu.Item key="/storage/cut"><Link to="/storage/cut">出库单</Link></Menu.Item>
                        <Menu.Item key="/storage/division"><Link to="/storage/division">库存分配</Link></Menu.Item>
                        <Menu.Item key="/storage/balance"><Link to="/storage/balance">库存余额</Link></Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="/product"
                        title={<span><Icon type="trademark" /><span>产品管理</span></span>}
                    >
                        <Menu.Item key="/product/depository"><Link to="/product/depository">产品库存</Link></Menu.Item>
                        <Menu.Item key="/product/cost"><Link to="/product/cost">产品成本</Link></Menu.Item>
                        <Menu.Item key="/product/plist"><Link to="/product/plist">产品列表</Link></Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="/order"
                        title={<span><Icon type="shopping-cart" /><span>订单管理</span></span>}
                    >
                        <Menu.Item key="/order/statement"><Link to="/order/statement">订单报表</Link></Menu.Item>
                        <Menu.Item key="/order/olist"><Link to="/order/olist">订单列表</Link></Menu.Item>
                        <Menu.Item key="/order/attach"><Link to="/order/attach">订单归属</Link></Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="/customer"
                        title={<span><Icon type="pay-circle" /><span>客户管理</span></span>}
                    >
                        <Menu.Item key="/customer/cmessage"><Link to="/customer/cmessage">客户信息</Link></Menu.Item>
                        <Menu.Item key="/customer/market"><Link to="/customer/market">客户销售</Link></Menu.Item>
                        <Menu.Item key="/customer/order"><Link to="/customer/order">客户订单</Link></Menu.Item>
                        <Menu.Item key="/customer/relation"><Link to="/customer/relation">客户关系</Link></Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="/employee"
                        title={<span><Icon type="red-envelope" /><span>员工管理</span></span>}
                    >
                        <Menu.Item key="/employee/message"><Link to="/employee/message">员工信息</Link></Menu.Item>
                        <Menu.Item key="/employee/jurisdiction"><Link to="/employee/jurisdiction">员工权限</Link></Menu.Item>
                        <Menu.Item key="/employee/newadd"><Link to="/employee/newadd">新员工入职</Link></Menu.Item>
                        <Menu.Item key="/employee/performance"><Link to="/employee/performance">员工销售业绩</Link></Menu.Item>
                    </SubMenu>


                    <Menu.Item key="/set">
                        <Link to="/set">
                            <Icon type="setting" />
                            {<span className="nav-text">系统设置</span>}
                        </Link>
                    </Menu.Item>

                </Menu>
            </Sider>
    )
})

const mapStateToProps = (state) => {
    return{
        collapsed:state.page.collapsed,
    }
}

export default connect(mapStateToProps)(Bsider)



// class Bsider extends Component {
//     render() {
//         return (
//             <Sider
//                 trigger={null}
//                 collapsible
//                 collapsed={this.props.collapsed}
//             >
//                 <div className="layout-logo">
//                     <a href="/home">
//                         <img alt="" className="logo-img" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />
//                         <span className="logo-text">管理系统</span>
//                     </a>
//                 </div>
//                 <Menu theme="dark" 
//                     defaultSelectedKeys={['/']}
//                     selectedKeys={[this.props.location.pathname]}
//                     mode="inline">
//                     <Menu.Item key="/">
//                         <Link to="/">
//                             <Icon type="home" />
//                             <span>管理首页</span>
//                         </Link>
//                     </Menu.Item>

//                     <SubMenu
//                         key="/goods"
//                         title={<span><Icon type="shopping" /><span>商品</span></span>}
//                     >
//                         <Menu.Item key="/goods/goodslist"><Link to="/goods/goodslist">商品列表</Link></Menu.Item>
//                         <Menu.Item key="/goods/goodsclass"><Link to="/goods/goodsclass">商品分类</Link></Menu.Item>
//                         <Menu.Item key="/goods/goodsd"><Link to="/goods/goodsd">商品类型</Link></Menu.Item>
//                         <Menu.Item key="5"><Link to="/seting">品牌管理</Link></Menu.Item>
//                     </SubMenu>

//                     <SubMenu
//                         key="/sub2"
//                         title={<span><Icon type="pay-circle" /><span>订单管理</span></span>}
//                     >
//                         <Menu.Item key="/sub2/notification"><Icon type="/sub2/notification" />订单列表</Menu.Item>
//                         <Menu.Item key="/sub2/inbox"><Icon type="/sub2/inbox" />订单设置</Menu.Item>
//                         <Menu.Item key="/sub2/tablet"><Icon type="/sub2/tablet" />退货申请处理</Menu.Item>
//                         <Menu.Item key="/sub2/save"><Icon type="/sub2/save" />退货原因</Menu.Item>
//                     </SubMenu>

//                     <SubMenu
//                         key="/employee"
//                         title={<span><Icon type="red-envelope" /><span>员工管理</span></span>}
//                     >
//                         <Menu.Item key="/employee/message"><Link to="/employee/message">员工信息</Link></Menu.Item>
//                         <Menu.Item key="/employee/jurisdiction"><Link to="/employee/jurisdiction">员工权限</Link></Menu.Item>
//                         <Menu.Item key="/employee/newadd"><Link to="/employee/newadd">新员工入职</Link></Menu.Item>
//                         <Menu.Item key="/employee/performance"><Link to="/employee/performance">员工销售业绩</Link></Menu.Item>
//                     </SubMenu>


//                     <Menu.Item key="/set">
//                         <Link to="/set">
//                             <Icon type="setting" />
//                             {<span className="nav-text">系统设置</span>}
//                         </Link>
//                     </Menu.Item>

//                 </Menu>
//             </Sider>
//         )
//     }
// }

// export default withRouter(Bsider)


