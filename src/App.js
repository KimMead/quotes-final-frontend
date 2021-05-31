import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {fetchKinds} from './actions/fetchKinds';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchKinds({type: 'FETCH_KINDS', payload: {name: 'Inspirational'}}) 
    // fetch('http://localhost:3000/api/v1/kinds')
    // .then(resp => resp.json())
    // .then(data => console.log(data))

  }
  
  render() {
    return (
      <div className="App">
      Hello
      </div>
    );
  }
}


export default connect(null, {fetchKinds})(App);
