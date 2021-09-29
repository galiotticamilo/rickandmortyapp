import React, { useEffect } from 'react';
import Pagination from './Pagination';
import Character from './Character';
import useRAM from "../context/Context"

function CharacterList() {

    const {getCharacters, characters, info, searchValue} = useRAM()

    useEffect(() => {
        getCharacters(`https://rickandmortyapi.com/api/character/?name=${searchValue}`)
    }, [searchValue])

    return(
        <div className="return-characters">
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