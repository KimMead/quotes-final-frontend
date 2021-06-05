import React from 'react';
import {connect} from 'react-redux';
// import {editQuote} from '../actions/editQuote'

class QuoteEdit extends React.Component {

    state = {

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
        this.setState({})
        
    }

    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <label><h3>Edit Quote:</h3></label>
                    <input type='text' placeholder='Content' value={this.state.content} name="content" onChange={this.handleChange}/>
                    <input type="submit"/>
                    <input type='text' placeholder='Author' value={this.state.author} name="author" onChange={this.handleChange}/>
                    <input type="submit"/>
                    <input type='text' placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange}/>
                    <input type="submit"/>
                    <br></br>
                    <br></br>
                </form>
            </div>
        )
    }
}

export default connect(null, {editQuote})(QuoteEdit) 

