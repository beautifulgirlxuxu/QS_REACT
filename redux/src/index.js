import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counter from './reducers'
import Counter from './components/Counter'
const store = createStore(
    counter
)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Counter value={store.getState()} onIncrement={()=> store.dispatch({type: 'INCREMENT'})} 
    onDecrement={()=> store.dispatch({type: 'DECREMENT'})} />,
    rootEl
)

render()
store.subscribe(render)