import React from 'react';
import QuoteInput from '../components/QuoteInput';
import Quotes from '../components/Quotes';
import Quote from '../components/Quote'

class QuotesContainer extends React.Component {

    render() {
        return (
            <div>
                <Quotes quotes={this.props.kind && this.props.kind.quotes}/><br></br>
                <QuoteInput kind={this.props.kind}/>
            </div>
        )
    }
}
export default QuotesContainer 