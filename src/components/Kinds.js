// responsible for rendering a list of quote kinds. 
// props need to be passed in since this is a functional components

import React from 'react'

const Kinds = (props) => {

return (
    <div>
        {props.kinds.map(kind => <li key={kind.id}>{kind.name}</li>)}
    </div>
    )
}

export default Kinds