import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Quotes from '../components/Quotes';
import {Route, Link} from 'react-router-dom';
import Kind from '../components/Kind'
// import QuoteEdit from '../components/QuoteEdit';


const Quote = (props) => {
let quoteDetails = {}

useEffect(() => {
    // let kind = props.quote.filter((item) => {
    //     return item.id == props.kindId
    // })[0]
    console.log(props.getQuoteDetails(props.quote, props.kindId, props.match.params.id))

}, [])
    
    return (
        
        <div className="quote-details">
            <h2>Quote Details</h2>
            <p>Content:{props.getQuoteDetails(props.quote, props.kindId, props.match.params.id).content}</p>
            <p>Author:</p>
            <p>Description:</p>
            {/* <QuoteEdit/> */}
        </div>
        )

    }
    const mapStateToProps = state => {
        return {
            kindId: state.kindId
    
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
                console.log(kindsArray, kindId, quoteId)
            }
        }
    }
    

    export default connect(mapStateToProps, mapDispatchToProps)(Quote)