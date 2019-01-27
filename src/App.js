import React from 'react';
import Page from './Page'
import { BrowserRouter } from 'react-router-dom'
const App = () => {

    return (
        <BrowserRouter>
            <Page></Page>
        </BrowserRouter>
    );

}

export default App;