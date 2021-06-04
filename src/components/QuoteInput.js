import React from 'react';
import {connect} from 'react-redux';
import { addQuote } from '../actions/addQuote';

class QuoteInput extends React.Component {

    state = {
        content:'',
        author:'',
        description:'',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addQuote(this.state, this.props.kind.id)
        this.setState({
            content:'',
            author:'',
            description:''
        })
    }

render() {
    
    return (
        
        <div>
            <h3>Create A New Quote:</h3>
            <form onSubmit={this.handleSubmit}>
                <label>Quote:</label>
                <textarea name="content" placeholder='Enter Quote' value={this.state.content} onChange={this.handleChange}/><br></br>
                <label>Author:</label>
                <textarea name="author" placeholder='Enter Author' value={this.state.author} onChange={this.handleChange}/><br></br>
                <label>Description:</label>
                <textarea name="description"  placeholder='Enter Description' value={this.state.description} onChange={this.handleChange}/> 
                <input type="submit"/>
            </form>
        </div>
        
    )
}
}

export default connect(null, {addQuote})(QuoteInput) 