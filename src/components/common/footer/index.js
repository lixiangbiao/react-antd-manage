import React , {Component} from 'react'
import {Layout} from 'antd';
const {Footer} = Layout;


class Bfooter extends Component{
    render(){
        return(
            <div>
                <Footer style={{ textAlign: 'center' }}>
                    管理系统 ©{new Date().getFullYear()} Created by will lixbiao@126.com
                </Footer>
            </div>

        )
    }
}

export default Bfooter