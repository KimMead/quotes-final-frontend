import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = (props) => {

    return (
        <div className="NavBar">
            <Link to="/">Home</Link>
            <Link to="/kinds">Quote Categories</Link>
            <Link to="/new">Add a Category</Link>
        </div>
    )
}

export default NavBar