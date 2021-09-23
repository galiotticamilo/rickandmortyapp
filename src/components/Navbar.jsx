import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
    return(
        <div className="container-navbar">
            <Link to="/">
                <div>All Characters</div>
            </Link>
            <Link to="/random-character">
                <div>Random Character</div>
            </Link>
            <Link to="/advanced-search">
                <div>Advanced Search</div>
            </Link>
        </div>
    )
}

export default Navbar