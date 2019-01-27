import React from 'react'
import { Layout, Icon } from 'antd';
import { actionCreators } from '../../../store/page'
import { connect } from 'react-redux'
const { Header } = Layout;

const Bheader = (props) => {
    return (
        <Header style={{ background: '#fff', padding: 0 }} >
            <Icon
                className="trigger"
                id={String(props.collapsed)}
                type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={props.toggle}
            />
        </Header>
    )
}
// class Bheader extends Component{
//     render(){
//         return(
//             <Header style={{ background: '#fff', padding: 0 }} >
//                 <Icon
//                 className="trigger"
//                 id={String(this.props.collapsed)}
//                 type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
//                 onClick={this.props.toggle}
//                 />
//             </Header>

//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        collapsed: state.page.collapsed,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggle: () => {
            let action = actionCreators.toggleCollapsed()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bheader)