import React from "react";
import {Link} from "react-router-dom"

function Navbar() {

    return(
        <div className="container-navbar">
            <div className="container-search-links">
                <Link className="rick-morty"to="/">
                    <h1>Rick&Morty Wiki</h1>
                </Link>
                <div className="links">
                    <Link className="navbar-link" to="/">
                        <div>Home</div>
                    </Link>
                    <Link className="navbar-link" to="/advanced-search">
                        <div>Search</div>
                    </Link>
                    <Link className="navbar-link" to="/random-character">
                        <div>Random</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar