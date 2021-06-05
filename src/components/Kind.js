import React from 'react';
import {Redirect} from 'react-router-dom';
import KindEdit from '../components/KindEdit';
import QuotesContainer from '../containers/QuotesContainer'
import {Route, Link} from 'react-router-dom';

const Kind = (props) => {

let kind = props.kinds.filter((item) => {
    return item.id == props.match.params.id
})[0]

return (
    
    <div>
        <br></br>
        <h2>
            {kind ? kind.name : null}
        </h2>
        <KindEdit kind={kind}/>
        <QuotesContainer kind={kind}/>
    </div>
    )
}

export default Kind