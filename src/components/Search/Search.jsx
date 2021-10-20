import React from "react"
import "../Search/Search.css"

function Search( {searchUpdate, sValue} ) {

    return(
        <div>
            <input className="search" placeholder="Search" onChange={searchUpdate} value={sValue ? sValue : ''} type="text"/>
        </div>
    )
}

export default Search