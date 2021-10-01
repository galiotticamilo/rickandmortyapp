import React from "react"
import "../Search/Search.css"

function Search( {searchUpdate} ) {

    return(
        <div>
            <input className="search" placeholder="Search" onChange={searchUpdate} type="text"/>
        </div>
    )
}

export default Search