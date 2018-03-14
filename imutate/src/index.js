import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// redux container概念 父组件 redux 通信
// props, actions => 子组件
import App from './container/App/App';
import 'element-theme-default'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './redux/store/store'

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
