import React from "react"

function Search( {updateDatos} ) {
    
    return(
        <div>
            <input onChange={updateDatos} type="text" name="name"/>
        </div>
    )
}

export default Search