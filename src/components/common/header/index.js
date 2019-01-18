import React , {Component} from 'react'
import {Layout,Icon} from 'antd';
const {Header} = Layout;


class Bheader extends Component{
    render(){
        return(
            <Header style={{ background: '#fff', padding: 0 }} >
                <Icon
                className="trigger"
                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.props.toggle}
                />
            </Header>

        )
    }
}

export default Bheader