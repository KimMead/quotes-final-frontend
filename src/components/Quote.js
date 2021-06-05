import React from 'react';
import {connect} from 'react-redux';
import Quotes from '../components/Quotes';
import {Route, Link} from 'react-router-dom';
import Kind from '../components/Kind'


const Quote = (props) => {

    // let kind = props.kinds.filter((item) => {
    //     return item.id == props.match.params.id
    // })[0]
    
    return (
        
        <div>
            <br></br>
                
                {/* Quote content */}
                {/* Quote author */}
                {/* Quote description */}

                
           {/* QuoteEdit */}
           {/* <button> <i className="far fa-edit"></i></button> */}
        </div>
        )
    }
    

export default Quote