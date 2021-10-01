import React from "react";
import useRAM from "../../context/Context"
import "../Pagination/Pagination.css"

function Pagination() {

    const {info, getCharacters} = useRAM()

    const onPrev = () => {
        getCharacters(info.prev)
    }
    
    const onNext = () => {
        getCharacters(info.next)
    }

    return(
        <div>
            <div className="container-buttons">
                {info.prev ? 
                <button className="prev-next" onClick={onPrev}> &lt; Prev</button>
                :
                <div></div>
                }
                {info.next && 
                <button className="prev-next" onClick={onNext}>Next &gt;</button>
                }
            </div>
        </div>
    )
}

export default Pagination