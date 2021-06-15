import React from 'react';
import {connect} from 'react-redux';
import {editQuote} from '../actions/editQuote'

class QuoteEdit extends React.Component {

    state = {
        content: this.props.quote.content, 
        author: this.props.quote.author,
        description: this.props.quote.description
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault() 
        let quote = {...this.state, kindId: this.props.quote.kind_id, quoteId: this.props.quote.id}
        this.props.editQuote(quote)
        
    }

    render() {
        return (
            <div className="quote-edit">
                <form onSubmit={this.handleSubmit}>
                    <label><h3>Edit Quote:</h3></label><br></br>
                        <label>
                        Content: 
                    <input type='text' placeholder='Content' value={this.state.content} name="content" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Author:  
                    <input type='text' placeholder='Author' value={this.state.author} name="author" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Description: 
                    <input type='text' placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange}/>
                    </label>
                    <input type="submit"/>
                    <br></br>
                    <br></br>
                    
                </form>
            </div>
        )
    }
}

export default connect(null, {editQuote})(QuoteEdit) 

