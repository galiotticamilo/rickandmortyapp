import React from "react";
import useRAM from "../../context/Context"
import "../Pagination/Pagination.css"

function Pagination() {

    const {charactersInfo, getCharacters} = useRAM()

    const onPrev = () => {
        getCharacters(charactersInfo.info.prev)
    }
    
    const onNext = () => {
        getCharacters(charactersInfo.info.next)
    }

    return(
        <div>
            <div className="container-buttons">
                {charactersInfo.info.prev ? 
                <button className="prev-next" onClick={onPrev}> &lt; Prev</button>
                :
                <button className="inv-button"></button>
                }
                {charactersInfo.info.next && 
                <button className="prev-next" onClick={onNext}>Next &gt;</button>
                }
            </div>
        </div>
    )
}

export default Pagination