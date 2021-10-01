import { createContext, useContext, useState } from "react";

export const RAMContext = createContext()
const useRAM = () => useContext(RAMContext)
export default useRAM

export const RAMProvider = props => {

    const urlDefault = `https://rickandmortyapi.com/api/character`

    const [characters, setCharacters] = useState()
    const [info, setInfo] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const [count, setCount] = useState(0)
    const [urlAdvanced, setUrlAdvanced] = useState(urlDefault)
    const [noResults, setNoResults] = useState("")

    const updateDatos = (event) => {
        setSearchValue(event.target.value)
    }

    const getCharacters = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        if(data.error === "There is nothing here"){
            setNoResults(data.error)
            setInfo("")
            setCharacters("")
            setCount("")
        } else {
            setInfo(await data.info)
            setCharacters(await data.results)
            setCount(await data.info.count)
        } 
    }
    
    return (
        <RAMContext.Provider value={{
            getCharacters,
            info,
            characters,
            searchValue,
            setSearchValue,
            updateDatos,
            setInfo,
            count,
            urlDefault,
            urlAdvanced, 
            setUrlAdvanced,
            noResults
            }}
            >
            {props.children}
        </RAMContext.Provider>
    )
}
