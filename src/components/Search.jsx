import React from "react"

function Search( {searchUpdate} ) {

    return(
        <div>
            <input className="search" placeholder="Search" onChange={searchUpdate} type="text"/>
        </div>
    )
}

export default Search