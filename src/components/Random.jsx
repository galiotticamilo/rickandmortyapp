import React, {useState} from "react"
import { useEffect } from "react/cjs/react.development";
import Character from "./Character";

function Random() {

    const [randomCharacter, setRandomCharacter] = useState()
    const [count, setCount] = useState()

    const getAllCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        setCount(data.info.count)
    }

    useEffect(() => {
        getAllCharacters()
    }, [])

    const randomNum = (count) => {
        return (Math.floor(Math.random() * (count - 1) + 1))
    }

    const getCharacters = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${randomNum(count)}`)
        const data = await response.json()
        let array = []
        array.push(data)
        setRandomCharacter(array)
    }
    

    return(
        <div>
            {randomCharacter &&
                <div className="container">
                <Character
                data={randomCharacter}
                />
                </div>       
            }
            {count &&
                <button onClick={getCharacters}>Random</button> 
            }
        </div>
    )
}

export default Random