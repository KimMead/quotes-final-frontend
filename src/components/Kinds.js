// responsible for rendering a list of quote kinds. 
// props need to be passed in since this is a functional components
import React from 'react';
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom';
import Kind from '../components/Kind'
import {deleteKind} from '../actions/deleteKind'

const Kinds = (props) => {

const handleDelete = (kind) => {
    props.deleteKind(kind.id)
}

return (
    <div>
        <br></br>
        <h2>Quote Category List</h2>
        <br></br>
        {props.kinds.map(kind => 
            <div key={kind.id}>
                <Link to={`/kinds/${kind.id}`}>{kind.name}</Link>
                <button onClick={() => handleDelete(kind)}><i className="fas fa-trash"></i></button>
            </div>)}
    </div>
    )
}

export default connect(null, {deleteKind})(Kinds) 