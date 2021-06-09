import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Quotes from '../components/Quotes';
import {Route, Link} from 'react-router-dom';
import Kind from '../components/Kind'
import QuoteEdit from '../components/QuoteEdit';


const Quote = (props) => {
let quoteDetails = props.getQuoteDetails(props.kinds, props.kindId, props.match.params.id)


    return (
        <>
        {quoteDetails && (
            <div className="quote-details">
            <h2>Quote Details</h2>
            <p>Content: {quoteDetails.content}</p>
            <p>Author: {quoteDetails.author}</p>
            <p>Description: {quoteDetails.description}</p>
            <br></br>
            <br></br>
            <QuoteEdit quote={quoteDetails}/>
        </div>
        )}
        </>
        )

    }
    const mapStateToProps = state => {
        return {
            kindId: state.kindId,
            kinds: state.kinds
    
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            getQuoteDetails: (kindsArray, kindId, quoteId) => {
                let kind = kindsArray.filter((item) => {
                    return item.id == kindId
                })[0]
                let quote = kind.quotes.filter((item) => {
                    return item.id == quoteId
                })[0]
                return quote
                console.log(quote)
            }
        }
    }
    

    export default connect(mapStateToProps, mapDispatchToProps)(Quote)