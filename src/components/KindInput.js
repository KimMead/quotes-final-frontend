import React from 'react';
import {connect} from 'react-redux';
import {addKind} from '../actions/addKind'
import KindsContainer from '../containers/KindsContainer'
import Kinds from '../components/Kinds'

class KindInput extends React.Component {
// local state, not through store
    state = {
        name: ''
}

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault() 
    this.props.addKind(this.state)
    this.setState({name: ''})
    this.props.history.push('/kinds')
    
}

    render() {
        return (
            <div>
                <h2>Create A New Quote Category</h2>
                <form onSubmit={this.handleSubmit}>
                    <label><h3>Enter Category Name:</h3></label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/>
                    <input type="submit"/>
                    <br></br>
                    <br></br>
                    
                </form>
            </div>
        )
    }
}

export default connect(null, {addKind})(KindInput) 