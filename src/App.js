import React from 'react';
import Page from './Page'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/login'
import NotFound from './components/notfound'
const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/404" component={NotFound} />
                <Page></Page>
            </Switch>

        </BrowserRouter>
    );

}

export default App;