import React from 'react'
import {connect} from 'react-redux'
import {deleteQuote} from '../actions/deleteQuote'

const Quotes = (props) => {

const handleDelete = (quote) => {
    props.deleteQuote(quote.id, quote.kind_id)
}

    return (
        <div>
            {props.quotes && props.quotes.map(quote => 
                <li key={quote.id}>{quote.content}<br></br> - {quote.author} <button onClick={() => handleDelete(quote)}>Delete</button></li>
            )}
        </div>
    )
}

export default connect(null, {deleteQuote})(Quotes) 