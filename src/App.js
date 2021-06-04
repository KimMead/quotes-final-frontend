import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import KindsContainer from './containers/KindsContainer';
import NavBar from './components/NavBar'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import KindInput from './components/KindInput'
import Kinds from './components/Kinds'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <br></br>
        <header>
        <h1>Quote Keeper</h1>
        </header>
        <NavBar/>
        <br></br>
        <Switch> 
        <Route path='/kinds/new' component={KindInput}/>
        <KindsContainer/>
       
        </Switch>
      </div>
    );
  }
}


export default App;
// can set up all routes in this file/component