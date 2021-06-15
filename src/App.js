import React from 'react';
import './App.css';
import {connect} from 'react-redux';
// Connects a React component to a Redux store
import KindsContainer from './containers/KindsContainer';
import NavBar from './components/NavBar'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
// Switch renders the first route/redirect that matches the location.  
import KindInput from './components/KindInput'
import Kinds from './components/Kinds'
import Home from './components/Home'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <br></br>
        <header>
        <h1>Quote Keeper</h1>
        </header>
        <NavBar/>
        <Home/>
        <br></br>
        <Switch> 
        <KindsContainer/>
        </Switch>
      </div>
    );
  }
}


export default App;
// can set up all routes in this file/component, but I didn't :(