import React from 'react';
import QuoteInput from '../components/QuoteInput';
import Quotes from '../components/Quotes'

class QuotesContainer extends React.Component {

    render() {
        return (
            <div>
                <QuoteInput/>
                <Quotes quotes={this.props.kind && this.props.kind.quotes}/>
            </div>
        )
    }
}
export default QuotesContainer 