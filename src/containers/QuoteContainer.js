import React from 'react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom';
import Quote from '../components/quote'

class QuoteContainer extends React.Component {

    render() {
        return (
            <div>
                <Quote quote={this.props.kind && this.props.kind.quote}/>
            </div>
        )
    }
}
export default QuoteContainer 