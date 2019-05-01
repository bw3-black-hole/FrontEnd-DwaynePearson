import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { setToken } from './util/token';
import thunk from 'redux-thunk';
import { logger } from './util/logger';
import reducer from './reducers';

const store = createStore((reducer, applyMiddleware(thunk, setToken, logger)));

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

