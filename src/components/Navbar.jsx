import React from "react";
import {Link} from "react-router-dom"

function Navbar() {

    return(
        <div className="container-navbar">
            <div className="container-search-links">
                <Link to="/">
                    <h1 className="rick-morty">Rick&Morty Wiki</h1>
                </Link>
                <div className="links">
                    <Link className="navbar-link" to="/">
                        <div>Home</div>
                    </Link>
                    <Link className="navbar-link" to="/advanced-search">
                        <div>Search Character</div>
                    </Link>
                    <Link className="navbar-link" to="/random-character">
                        <div>Random Character</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar