import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../components/home/home';
import Set from '../components/set/set';
import Message from '../components/employee/message'
const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>

            <Route path="/storage/enter" component={Message}></Route>
            <Route path="/storage/cut" component={Set}></Route>
            <Route path="/storage/division" component={Set}></Route>
            <Route path="/storage/balance" component={Set}></Route>

            <Route path="/product/depository" component={Set}></Route>
            <Route path="/product/cost" component={Set}></Route>
            <Route path="/product/list" component={Set}></Route>

            <Route path="/order/statement" component={Set}></Route>
            <Route path="/order/list" component={Set}></Route>
            <Route path="/order/attach" component={Set}></Route>

            <Route path="/customer/message" component={Message}></Route>
            <Route path="/customer/market" component={Set}></Route>
            <Route path="/customer/order" component={Set}></Route>
            <Route path="/customer/relation" component={Message}></Route>

            <Route path="/employee/message" component={Message}></Route>
            <Route path="/employee/jurisdiction" component={Set}></Route>
            <Route path="/employee/newadd" component={Set}></Route>
            <Route path="/employee/performance" component={Set}></Route>

            <Route path="/set" component={Set}></Route>
        </Switch>
    )
}

export default Router