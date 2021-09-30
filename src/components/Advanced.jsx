import React, {useEffect, useState} from "react"
import Character from "./Character"
import Pagination from "./Pagination"
import useRAM from "../context/Context"
import Search from "./Search"

function Advanced() {
    
    const urlDefault = `https://rickandmortyapi.com/api/character`

    const {searchValue, getCharacters, characters, updateDatos, setSearchValue} = useRAM()

    const [urlAdvanced, setUrlAdvanced] = useState(urlDefault)
    const [stateFilter, setStateFilter] = useState({})

    const clear = () => {
        setUrlAdvanced(`${urlDefault}/?name=${searchValue}`)
        setStateFilter({})
    }
    
    const filter = (value, tipe) => {
        setStateFilter({value, tipe})
        searchValue ? 
        setUrlAdvanced(`${urlDefault}/?${tipe}=${value}&name=${searchValue}`)
        :
        setUrlAdvanced(`${urlDefault}/?${tipe}=${value}`)
    }

    const searchUpdate = (event) => {
        setSearchValue(event.target.value);

        stateFilter ? 
        setUrlAdvanced(`${urlDefault}/?${stateFilter.tipe}=${stateFilter.value}&name=${searchValue}`) 
        : 
        setUrlAdvanced(`${urlDefault}/?name=${searchValue}`);
    }

    useEffect(() => {
        getCharacters(urlAdvanced)
    }, [urlAdvanced, searchValue, stateFilter])

    return(
        <div className="return-characters">
            <div className="container-search">
                <div className="advanced-container">
                    <Search className="input-search" searchUpdate={searchUpdate}/>
                    <div className="container-clear">
                        <div className="clear" onClick={clear}>Clear filters</div>
                        <div className="select-container">
                            <label>Filter by</label>
                            <select className="select">
                                <option defaultValue hidden>Select</option>
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
                    </div>
                </div>
                <Pagination updateDatos={updateDatos}/>
            </div>
            {
                characters ?
                <div className="container">
                    <Character
                    key={characters.id}
                    data={characters}
                    />
                </div> : 
                <div>NO HAY NADA PERRO</div>
            }
            <Pagination/>
        </div>
    )
}

export default Advanced