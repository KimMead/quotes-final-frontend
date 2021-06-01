import React from 'react'

const Quotes = (props) => {

    return (
        <div>
            {props.quotes && props.quotes.map(quote => 
                <li key={quote.id}>{quote.content}<br></br> - {quote.author}</li>
            )}
        </div>
    )
}

export default Quotes 