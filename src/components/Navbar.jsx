import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
    return(
        <div className="container-navbar">
            <div className="links">
                <Link className="navbar-link" to="/">
                    <div>All Characters</div>
                </Link>
                <Link className="navbar-link" to="/random-character">
                    <div>Random Character</div>
                </Link>
                <Link className="navbar-link" to="/advanced-search">
                    <div>Advanced Search</div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar