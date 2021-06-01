import React from 'react'

const Kind = (props) => {

let kind = props.kinds[props.match.params.id - 1]

return (
    <li>
        {kind ? kind.name : null}
    </li>
)
}

export default Kind