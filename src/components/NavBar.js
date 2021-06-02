import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = (props) => {

    return (
        <div>
            {/* <Link to='/kinds' >Quote Categories</Link> */}
            <Link to='/kinds/new' >Add a Category</Link>
        </div>
    )
}

export default NavBar