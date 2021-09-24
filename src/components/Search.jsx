import React from "react"

function Search( {updateDatos} ) {
    
    return(
        <div>
            <input className="search" placeholder="Search" onChange={updateDatos} type="text"/>
        </div>
    )
}

export default Search