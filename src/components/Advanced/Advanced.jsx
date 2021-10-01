import React, {useEffect, useState} from "react"
import Character from "../Character/Character"
import Pagination from "../Pagination/Pagination"
import useRAM from "../../context/Context"
import Search from "../Search/Search"
import "../Advanced/Advanced.css"

function Advanced() {

    const {searchValue, getCharacters, characters, updateDatos, setSearchValue, urlDefault, urlAdvanced, setUrlAdvanced, noResults} = useRAM()

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
        setUrlAdvanced(`${urlDefault}/?name=${searchValue}`)
    }

    useEffect(() => {
        getCharacters(urlAdvanced)
    }, [urlAdvanced, searchValue, stateFilter])

    return(
        <div className="main-advanced-container">
            <div className="advanced-container">
                <div className="search-filters-container">
                    <Search className="input-search" searchUpdate={searchUpdate}/>
                    <div className="filter-container">
                        <div className="clear" onClick={clear}>Clear filters</div>
                        <div className="select-container">
                            <label>Filter by</label>
                            <select className="option-select">
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
                {characters && <Pagination updateDatos={updateDatos}/>}
            </div>
            {
                characters ?
                <div className="container">
                    <Character
                    data={characters}
                    />
                </div> : 
                <h2 className="no-results">{noResults}...</h2>
            }
            {characters &&<Pagination/>}
        </div>
    )
}

export default Advanced