import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , applyMiddleware, compose} from 'redux'; 
// Creates a Redux store that holds the complete state of the app.  It is where you store your data globally.  
import thunk from 'redux-thunk';
// Allows for dispatching actions asynchronously and resolve each promise that gets returned.  It sits between an action being dispatched and the action reaching the reducers.
import {Provider} from 'react-redux';
// Allows for the Redux store to be available to any nested component that needs access to the store.
import {BrowserRouter as Router} from 'react-router-dom'
// Allows users to move between components while preserving state.  Declarative routing system. 
import kindReducer from './reducers/kindReducer'
import './index.css';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let kindId = localStorage.getItem("currentKindId") || null
// Need localStorage to store the kindId for the associated quote - otherwise, we lose the id.  

let store = createStore(kindReducer, {kindId: kindId}, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, 
document.getElementById('root')
);


