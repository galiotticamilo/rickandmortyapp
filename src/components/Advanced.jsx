import React, {useEffect, useState} from "react"
import Character from "./Character"
import Pagination from "./Pagination"

function Advanced() {
    
    const [showCharacters, setShowCharacters] = useState()
    const [info, setInfo] = useState()
    const [urlAdvanced, setUrlAdvanced] = useState([`https://rickandmortyapi.com/api/character`])

    const urlDefault = `https://rickandmortyapi.com/api/character`

    function getCharacters(url) {
        fetch(url)
        .then(elem => elem.json())
        .then(data => {
            setShowCharacters(data.results)
            setInfo(data.info)
        })
    }

    const filter = (value, tipe) => {
        setUrlAdvanced(`${urlDefault}/?${tipe}=${value}`)
    }

    useEffect(() => {
        getCharacters(urlAdvanced)
        console.log(urlAdvanced)
    }, [urlAdvanced])

    return(
        <div className="return-characters">
            <div className="container-search">
                <div className="select-container">
                    <label>Filter by</label>
                    <select className="select">
                        <option selected hidden>Select</option>
                        <optgroup className="group" label="Gender">
                            <option onClick={() => filter("female", "gender")}>Female</option>
                            <option onClick={() => filter("male", "gender")}>Male</option>
                            <option onClick={() => filter("unknown", "gender")}>Unknown</option>
                        </optgroup>
                        <optgroup className="group" label="Status">
                            <option onClick={() => filter("alive", "status")}>Alive</option>
                            <option onClick={() => filter("dead", "status")}>Dead</option>
                            <option onClick={() => filter("unknown", "status")}>Unknown</option>
                        </optgroup>
                        <optgroup className="group" label="Species">
                            <option onClick={() => filter("human", "species")}>Human</option>
                            <option onClick={() => filter("alien", "species")}>Alien</option>
                            <option onClick={() => filter("unknown", "species")}>Unknown</option>
                        </optgroup>
                    </select>
                </div>

                <Pagination info={info} getCharacters={getCharacters}/>
            </div>
            {
                showCharacters &&
                <div className="container">
                    <Character
                    data={showCharacters}
                    />
                </div>
            }
            <Pagination info={info} getCharacters={getCharacters}/>
        </div>
    )
}

export default Advanced