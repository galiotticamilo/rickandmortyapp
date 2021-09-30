import { createContext, useContext, useState } from "react";

export const RAMContext = createContext()
const useRAM = () => useContext(RAMContext)
export default useRAM

export const RAMProvider = props => {

    const [characters, setCharacters] = useState()
    const [info, setInfo] = useState()
    const [searchValue, setSearchValue] = useState("")
    const [count, setCount] = useState()

    const updateDatos = (event) => {
        setSearchValue(event.target.value)
    }

    const getCharacters = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        setCharacters(data.results)
        setInfo(data.info)
        setCount(data.info.count)
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
            count
            }}
            >
            {props.children}
        </RAMContext.Provider>
    )
}
