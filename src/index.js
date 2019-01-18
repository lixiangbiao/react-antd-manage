import React from 'react';// react核心，用到jsx的地方，都需要这个
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store' //引入redux 的store
import { Provider } from 'react-redux'; // react和redux连接的桥梁，Provider
const Apps =(
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(Apps, document.getElementById('root'));

