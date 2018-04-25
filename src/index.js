import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import promise from "redux-promise";
import thunk from "redux-thunk";

import './index.css';
import App from './App';

import combinedReducer from "./store/reducers/combinedReducer";


import registerServiceWorker from './registerServiceWorker';

const store = createStore(combinedReducer, applyMiddleware(promise, thunk));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
