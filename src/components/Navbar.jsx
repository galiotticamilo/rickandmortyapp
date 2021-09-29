import React from "react";
import {Link} from "react-router-dom"
import useRAM from "../context/Context"
import Search from "../components/Search"

function Navbar() {

    const {updateDatos} = useRAM()

    return(
        <div className="container-navbar">
            <div className="container-search-links">
                <Search updateDatos={updateDatos}/>
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
        </div>
    )
}

export default Navbar