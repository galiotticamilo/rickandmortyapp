import React from "react";
import {Link} from "react-router-dom"
import "../Navbar/Navbar.css"

function Navbar() {

    return(
        <div className="main-navbar-container">
            <div className="navbar-container">
                <Link className="rick-morty"to="/">
                    <h1>Rick&Morty Wiki</h1>
                </Link>
                <div className="links-container">
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