import React from 'react';
import {Redirect} from 'react-router-dom';
import QuotesContainer from '../containers/QuotesContainer'

const Kind = (props) => {

let kind = props.kinds[props.match.params.id - 1]

return (
    <div>
        <h2>
            {kind ? kind.name : null}
        </h2>
        <QuotesContainer kind={kind}/>
    </div>
    )
}

export default Kind