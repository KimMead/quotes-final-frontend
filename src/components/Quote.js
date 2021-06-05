import React from 'react';
import {connect} from 'react-redux';
import Quotes from '../components/Quotes';
import {Route, Link} from 'react-router-dom';
import Kind from '../components/Kind'
// import QuoteEdit from '../components/QuoteEdit';


const Quote = (props) => {

    // let kind = props.kinds.filter((item) => {
    //     return item.id == props.match.params.id
    // })[0]
    
    return (
        
        <div className="quote-details">
            <h2>Quote Details</h2>
            Content:
            Author:
            Description:
            {/* <QuoteEdit/> */}
        </div>
        )
    }
    

export default Quote