import React, {useEffect, useState} from "react"
import Character from "./Character"
import Pagination from "./Pagination"
import Search from "./Search"

function Advanced() {
    
    const [showCharacters, setShowCharacters] = useState()
    const [info, setInfo] = useState()
    const [urlAdvanced, setUrlAdvanced] = useState(`https://rickandmortyapi.com/api/character`)
    const [searchValue, setSearchValue] = useState("")

    function getCharacters(url) {
        fetch(url)
        .then(elem => elem.json())
        .then(data => {
            setShowCharacters(data.results)
            setInfo(data.info)
        })
    }

    const updateDatos = (event) => {
        setSearchValue(event.target.value)
    }

    useEffect(() => {
        getCharacters(`${urlAdvanced}&name=${searchValue}`)
    }, [searchValue])

    const alive = () => {
        setUrlAdvanced("https://rickandmortyapi.com/api/character/?status=alive")
    }
    const human = () => {
        setUrlAdvanced("https://rickandmortyapi.com/api/character/?species=human")
    }
    const male = () => {
        setUrlAdvanced("https://rickandmortyapi.com/api/character/?gender=male")
    }
    const female = () => {
        setUrlAdvanced("https://rickandmortyapi.com/api/character/?gender=female")
    }

    useEffect(() => {
        getCharacters(urlAdvanced)
    }, [urlAdvanced])

    return(
        <div>
            <div>
                <div onClick={human}>human</div>
                <div onClick={male}>male</div>
                <div onClick={female}>female</div>
                <div onClick={alive}>alive</div>
            </div>

            <Search updateDatos={updateDatos}/>
            <Pagination info={info} getCharacters={getCharacters}/>
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