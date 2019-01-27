import React from 'react';// react核心，用到jsx的地方，都需要这个
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store' //引入redux 的store
import { Provider } from 'react-redux'; // react和redux连接的桥梁，Provider

import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';//antd 提供的语言方案
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const Apps =(
    <Provider store={store}>
        <LocaleProvider locale={zhCN}>
            <App />
        </LocaleProvider>
    </Provider>
)

ReactDOM.render(Apps, document.getElementById('root'));

