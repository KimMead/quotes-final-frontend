import React from 'react';
import {connect} from 'react-redux';
import {editKind} from '../actions/editKind'

class KindEdit extends React.Component {
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
    let kind = {...this.state, id: this.props.kind.id}
    this.props.editKind(kind)
    this.setState({name: ''})
    
}

    render() {
        return (
            <div>
                <h2>Edit Category Name:</h2>
                <form onSubmit={this.handleSubmit}>
                    <label><h3>Enter New Category Name:</h3></label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/>
                    <input type="submit"/>
                    <br></br>
                    <br></br>
                </form>
            </div>
        )
    }
    
}

export default connect(null, {editKind})(KindEdit) 