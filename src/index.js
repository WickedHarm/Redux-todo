import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import promise from "redux-promise";

import './index.css';
import App from './App';

import reducer from "./store/reducer";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(promise));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
