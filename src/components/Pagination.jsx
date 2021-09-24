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
                <button className="prev-next" onClick={onPrev}> &lt; Prev</button>
                <button className="prev-next" onClick={onNext}>Next &gt;</button>
            </div>
        </div>
    )
}

export default Pagination