import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import kindReducer from './reducers/kindReducer'
import './index.css';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let kindId = localStorage.getItem("currentKindId") || null
let store = createStore(kindReducer, {kindId: kindId}, composeEnhancers(applyMiddleware(thunk)))

// store is where you store your data globally
// we send an action object to the reducer and decide what we want to update about our current store, and the reducer will retrun an updated version of the store 

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, 
document.getElementById('root')
);


