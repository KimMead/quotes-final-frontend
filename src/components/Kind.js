import React from 'react';
import {Redirect} from 'react-router-dom';
import KindEdit from '../components/KindEdit';
import QuotesContainer from '../containers/QuotesContainer'
import {Route, Link} from 'react-router-dom';

const Kind = (props) => {

let kind = props.kinds[props.match.params.id - 1]

return (
    <div>
        <h2>
            {kind ? kind.name : null}
        </h2>
        <KindEdit kind={kind}/>
        <QuotesContainer kind={kind}/>
        
    </div>
    )
}

export default Kind