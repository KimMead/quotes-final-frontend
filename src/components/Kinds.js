// responsible for rendering a list of quote kinds. 
// props need to be passed in since this is a functional components
import React from 'react'
// import {Route} from 'react-router-dom'
import Kind from './Kind'

const Kinds = (props) => {

return (
    <div>
        {props.kinds.map(kind => 
            <div key={kind.id}><Kind kind={kind}/></div>)}
    </div>
    )
}

export default Kinds