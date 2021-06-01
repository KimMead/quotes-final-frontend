import React from 'react';
import {connect} from 'react-redux';
import {addKind} from '../actions/addKind'

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
}


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Category Name:</label>
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