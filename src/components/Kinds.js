// responsible for rendering a list of quote kinds. 
// props need to be passed in since this is a functional components
import React from 'react';
import {Route, Link} from 'react-router-dom';
import Kind from '../components/Kind'

const Kinds = (props) => {

return (
    <div>
        <br></br>
        <h2>Quote Category List</h2>
        <br></br>
        {props.kinds.map(kind => 
            <div key={kind.id}>
                <Link to={`/kinds/${kind.id}`}>{kind.name}</Link>
            </div>)}
    </div>
    )
}

export default Kinds