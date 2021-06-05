import React from 'react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom';
import {deleteQuote} from '../actions/deleteQuote'


const Quotes = (props) => {

const handleDelete = (quote) => {
    props.deleteQuote(quote.id, quote.kind_id)
}

    return (
        <div>
            <br></br>
            <h2>Quote List</h2>
                <ul className="quote-links">
                    {props.quotes && props.quotes.map(quote => (
                        <li key={quote.id}>
                            <Link to={`/quote/${quote.id}`}>{quote.content}</Link>
                            <button onClick={() => handleDelete(quote)}><i className="fas fa-trash"></i></button>
                        </li>
                        )
                    )}
                </ul>
        </div>
    )
}

export default connect(null, {deleteQuote})(Quotes) 
