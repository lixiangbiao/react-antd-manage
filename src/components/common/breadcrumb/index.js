import React from 'react'
import { Breadcrumb } from 'antd';
import { withRouter } from 'react-router-dom'
import { routerName } from '../../../unit'
const BBreadcrumb = (props) => {
    const breadarr = routerName(props.location.pathname)
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            {
                breadarr.map((value, index) => {
                    return (
                        <Breadcrumb.Item key={index}>{value}</Breadcrumb.Item>
                    )
                })

            }
        </Breadcrumb>
    )
}


export default withRouter(BBreadcrumb)