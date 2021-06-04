import React from 'react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom';
// import {deleteQuote} from '../actions/deleteQuote'


const Quotes = (props) => {

// const handleDelete = (quote) => {
//     props.deleteQuote(quote.id, quote.kind_id)
// }

    return (
        <div>
            <br></br>
            <h2>Quote List</h2>
            {props.quotes && props.quotes.map(quote => 
            <div key={quote.id}>{quote.content}<br></br>
            {/* Who said it? {quote.author} */}
            <Link to={`/quote/${quote.id}`}>{quote.content}</Link>
            {/* <button onClick={() => handleDelete(quote)}>Delete</button> */}
            </div>
            )}
            
        </div>
    )
}
// export default connect(null, {deleteQuote})(Quotes) 
export default Quotes