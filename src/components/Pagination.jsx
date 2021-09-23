import React from "react";

function Pagination( {info, getCharacters} ) {

    const onPrev = () => {
        getCharacters(info.prev)
    }
    
    const onNext = () => {
        getCharacters(info.next)
    }

    return(
        <div>
            <div className="container-buttons">
                <button onClick={onPrev}>prev</button>
                <button onClick={onNext}>next</button>
            </div>
        </div>
    )
}

export default Pagination