// responsible for rendering a list of quote kinds. 
// props need to be passed in since this is a functional components
import React from 'react';
import {Route, Link} from 'react-router-dom';
import Kind from './Kind'

const Kinds = (props) => {

return (
    <div>
        <h2>Quote Category List</h2>
        {props.kinds.map(kind => 
            <li key={kind.id}>
                <Link to={`/kinds/${kind.id}`}>{kind.name}</Link>
            </li>)}
    </div>
    )
}

export default Kinds