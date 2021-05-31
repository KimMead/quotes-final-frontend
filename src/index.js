import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import kindReducer from './reducers/kindReducer'

import './index.css';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(kindReducer, composeEnhancers(applyMiddleware(thunk)))

// store is where you store your data globally
// we send an action object to the reducer and decides what we want to update about our current store, and the reducer will retrun an updated version of the store 

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));


