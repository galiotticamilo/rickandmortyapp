import { createContext, useContext, useState } from "react";

export const RAMContext = createContext()
const useRAM = () => useContext(RAMContext)
export default useRAM

export const RAMProvider = props => {

    const urlDefault = `https://rickandmortyapi.com/api/character`

    const [charactersInfo, setCharactersInfo] = useState({
        characters: [],
        info: "",
        count: 0,
        noResults: ""
    })

    const [searchValue, setSearchValue] = useState("")
    const [urlAdvanced, setUrlAdvanced] = useState(urlDefault)

    const updateDatos = (event) => {
        setSearchValue(event.target.value)
    }

    const getCharacters = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        if(data.error === "There is nothing here"){
            setCharactersInfo({
                characters: "",
                info: "",
                count: 0,
                noResults: data.error
            })
        } else {
            setCharactersInfo({
                characters: data.results,
                info: data.info,
                count: data.info.count
            })
        } 
    }
    
    return (
        <RAMContext.Provider value={{
            getCharacters,
            charactersInfo,
            searchValue,
            setSearchValue,
            updateDatos,
            urlDefault,
            urlAdvanced, 
            setUrlAdvanced
            }}
            >
            {props.children}
        </RAMContext.Provider>
    )
}
