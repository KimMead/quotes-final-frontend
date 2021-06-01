import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import KindsContainer from './containers/KindsContainer'

class App extends React.Component {

  componentDidMount() {
  }
  
  render() {
    return (
      <div className="App">
        <KindsContainer/>
      </div>
    );
  }
}


export default App;
// can set up all routes in this file/component