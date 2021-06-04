import React from 'react';
import {connect} from 'react-redux';
import {deleteQuote} from '../actions/deleteQuote';
import Quotes from '../components/Quotes';
import {Route, Link} from 'react-router-dom';
import Kind from '../components/Kind'


const Quote = (props) => {

// const handleDelete = (quote) => {
//     props.deleteQuote(quote.id, quote.kind_id)
// }
    return (
        <div>
            Hello
            {/* <li>{quote ? quote.content : null}</li>
             */}
           {/* <p>{quote.kind_id.content}</p> */}
           {/* <p>{quote.attributes.author}</p>
           <p>{quote.attributes.description}</p> */}
        </div>
    )   
}
    
// export default connect(null, {deleteQuote})(Quote) 
export default Quote