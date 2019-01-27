import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../components/home/home';

import Enter from '../components/storage/enter' //仓库管理 - 入库单
import Cut from '../components/storage/cut' //仓库管理 - 出库单
import Division from '../components/storage/division' //仓库管理 - 出库单
import Balance from '../components/storage/balance' //仓库管理 - 出库单

import Depository from '../components/product/depository'
import Cost from '../components/product/cost'
import Plist from '../components/product/list'

import Statement from '../components/order/statement'
import Olist from '../components/order/list'
import Attach from '../components/order/attach'

import Cmessage from '../components/customer/cmessage'
import Market from '../components/customer/market'
import Order from '../components/customer/order'
import Relation from '../components/customer/relation'

import Message from '../components/employee/message' //  员工信息
import Jurisdiction from '../components/employee/jurisdiction' //  
import Newadd from '../components/employee/newadd' //  
import Performance from '../components/employee/performance' //  

import Set from '../components/set/set';//系统设置
const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>

            <Route path="/storage/enter" component={Enter}></Route>
            <Route path="/storage/cut" component={Cut}></Route>
            <Route path="/storage/division" component={Division}></Route>
            <Route path="/storage/balance" component={Balance}></Route>

            <Route path="/product/depository" component={Depository}></Route>
            <Route path="/product/cost" component={Cost}></Route>
            <Route path="/product/plist" component={Plist}></Route>

            <Route path="/order/statement" component={Statement}></Route>
            <Route path="/order/olist" component={Olist}></Route>
            <Route path="/order/attach" component={Attach}></Route>

            <Route path="/customer/cmessage" component={Cmessage}></Route>
            <Route path="/customer/market" component={Market}></Route>
            <Route path="/customer/order" component={Order}></Route>
            <Route path="/customer/relation" component={Relation}></Route>

            <Route path="/employee/message" component={Message}></Route>
            <Route path="/employee/jurisdiction" component={Jurisdiction}></Route>
            <Route path="/employee/newadd" component={Newadd}></Route>
            <Route path="/employee/performance" component={Performance}></Route>

            <Route path="/set" component={Set}></Route>
        </Switch>
    )
}

export default Router