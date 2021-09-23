import React, { useEffect, useState } from 'react';
import Search from './Search';
import Pagination from './Pagination';
import Character from './Character';

function CharacterList() {

    const [characters, setCharacters] = useState()
    const [info, setInfo] = useState()
    const [searchValue, setSearchValue] = useState("")

    const getCharacters = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        setCharacters(data.results)
        setInfo(data.info)
    }

    const updateDatos = (event) => {
        setSearchValue(event.target.value)
    }

    useEffect(() => {
        getCharacters(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
    }, [searchValue])

    return(
        <div className="return-characters">
            <Search updateDatos={updateDatos}/>
            <Pagination info={info} getCharacters={getCharacters}/>
            {characters &&
                <div className="container">
                    <Character
                    data={characters}
                    />
                </div>       
            }
            <Pagination info={info} getCharacters={getCharacters}/>
        </div>
    )
}

export default CharacterList