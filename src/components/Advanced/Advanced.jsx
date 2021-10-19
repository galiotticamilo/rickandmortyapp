import React, {useEffect, useState} from "react"
import Character from "../Character/Character"
import Pagination from "../Pagination/Pagination"
import useRAM from "../../context/Context"
import Search from "../Search/Search"
import "../Advanced/Advanced.css"

function Advanced() {

    const {searchValue, getCharacters, characters, updateDatos, setSearchValue, urlDefault, urlAdvanced, setUrlAdvanced, noResults} = useRAM()

    const [stateFilter, setStateFilter] = useState({})

    const genderArr = [
        {
            gender: "female"
        },
        {
            gender: "male"
        },
        {
            gender: "unknown"
        }
    ]

    const statusArr = [
        {
            status: "alive"
        },
        {
            status: "dead"
        },
        {
            status: "unknown"
        }
    ]

    const speciesArr = [
        {
            species: "human"
        },
        {
            species: "alien"
        },
        {
            species: "unknown"
        }
    ]

    const clear = () => {
        console.log(searchValue)
        setUrlAdvanced(`${urlDefault}/?name=${searchValue}`)
        setSearchValue("")
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
        <div className="general-container">
            <div className="main-advanced-container">
                <div className="advanced-container">
                    <div className="search-filters-container">
                        <div className="inv-box"></div>
                        <Search className="input-search" searchUpdate={searchUpdate}/>
                        <div className="filter-container">
                            <div className="clear" onClick={clear}>Clear filters</div>
                            <div className="select-container">
                                <label>Filter by</label>
                                <select className="option-select">
                                    <option defaultValue hidden>Select</option>
                                    <optgroup className="group" label="Gender">
                                        {genderArr.map(elem => <option onClick={() => filter(elem.gender, "gender")}>{elem.gender}</option>)}
                                    </optgroup>
                                    <optgroup className="group" label="Status">
                                        {statusArr.map(elem => <option onClick={() => filter(elem.status, "status")}>{elem.status}</option>)}
                                    </optgroup>
                                    <optgroup className="group" label="Species">
                                        {speciesArr.map(elem => <option onClick={() => filter(elem.species, "species")}>{elem.species}</option>)}
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        {characters && <Pagination updateDatos={updateDatos}/>}
                    </div>
                    
                </div>
                {
                    characters ?
                    <div>
                        <Character
                        data={characters}
                        />
                    </div> : 
                    <h2 className="no-results">{noResults}...</h2>
                }
                {characters && <Pagination/>}
            </div>
        </div>
    )
}

export default Advanced