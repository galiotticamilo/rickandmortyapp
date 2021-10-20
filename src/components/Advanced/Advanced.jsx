import React, {useEffect, useState} from "react"
import Character from "../Character/Character"
import Pagination from "../Pagination/Pagination"
import useRAM from "../../context/Context"
import "../Advanced/Advanced.css"

function Advanced() {

    const {searchValue, getCharacters, updateDatos, setSearchValue, urlDefault, urlAdvanced, setUrlAdvanced, charactersInfo} = useRAM()

    const [stateFilter, setStateFilter] = useState()
    const [filterStatus, setFilterStatus] = useState(true)

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
        setSearchValue("")
        setUrlAdvanced(`${urlDefault}/?name=${searchValue}`)
        setStateFilter()
        isFilter()
    }

    const isFilter = () => {
        if (stateFilter) {
            setFilterStatus(false)
            getCharacters(urlAdvanced)
        } else {
            setFilterStatus(true)
            getCharacters(urlDefault)
        }
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
        if (!searchValue) {
            isFilter()
        } else {
            getCharacters(urlAdvanced)
        }
    }, [searchValue, urlAdvanced, stateFilter])

    return(
        <div className="general-container">
            <div className="main-advanced-container">
                <div className="advanced-container">
                    <div className="search-filters-container">
                        <div className="inv-box"></div>
                        <input 
                            className="search" 
                            placeholder="Search" 
                            onChange={searchUpdate} 
                            value={searchValue ? searchValue : ''} 
                            type="text" 
                        />
                        <div className="filter-container">
                            <div className="clear" onClick={clear}>Clear filters</div>
                            <div className="select-container">
                                <label>Filter by</label>
                                
                                <select className="option-select">
                                    <optgroup className="group" label="Gender">
                                        {genderArr.map(elem => <option className="single-option" onClick={() => filter(elem.gender, "gender")}>{elem.gender}</option>)}
                                        <option selected={filterStatus} hidden>Select</option> 
                                    </optgroup>
                                    <optgroup className="group" label="Status">
                                        {statusArr.map(elem => <option className="single-option" onClick={() => filter(elem.status, "status")}>{elem.status}</option>)}
                                    </optgroup>
                                    <optgroup className="group" label="Species">
                                        {speciesArr.map(elem => <option className="single-option" onClick={() => filter(elem.species, "species")}>{elem.species}</option>)}
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        {charactersInfo.characters && <Pagination updateDatos={updateDatos}/>}
                    </div>
                    
                </div>
                {
                    charactersInfo.characters ?
                    <div>
                        <Character data={charactersInfo.characters}/>
                    </div> : 
                    <h2 className="no-results">{charactersInfo.noResults}...</h2>
                }
                {charactersInfo.characters && <Pagination/>}
            </div>
        </div>
    )
}

export default Advanced