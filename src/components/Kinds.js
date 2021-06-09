// responsible for rendering a list of quote kinds. 
// props need to be passed in since this is a functional components
import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom';
import Kind from '../components/Kind'
import {deleteKind} from '../actions/deleteKind'

const Kinds = (props) => {

useEffect(() => {
    console.log(props.kinds)
},[props.kinds])
    
const handleDeleteButton = (event, kind) => {
        event.preventDefault()
        props.handleDelete(kind)
    }

return (
    <div>
        <br></br>
        <h2>Quote Category List</h2>
        <br></br>
        {props.kinds && 
        <>
        {props.kinds.map(kind => 
            <div key={kind.id}>
                <Link onClick={() => props.handleClick(kind.id)} to={`/kinds/${kind.id}`}>{kind.name}</Link>
                <button onClick={(event) => handleDeleteButton(event, kind)}><i className="fas fa-trash"></i></button>
            </div>)}
            </>
        }
    </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (id) => dispatch({
            type: 'SET_KIND_ID', 
            payload: id
        }), 
        handleDelete: (kind) => dispatch(deleteKind(kind.id))
    }
}

const mapStateToProps = (state) => {
    return {
        kinds: state.kinds 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Kinds)