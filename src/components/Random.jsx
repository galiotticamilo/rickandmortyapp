import React, {useState} from "react"
import { useEffect } from "react/cjs/react.development";
import useRAM from "../context/Context"

function Random() {

    const {count, getCharacters, urlDefault} = useRAM()

    const [randomCharacter, setRandomCharacter] = useState()

    useEffect(() => {
        getCharacters(urlDefault)
    }, [])

    const randomNum = (count) => {
        return (Math.floor(Math.random() * (count - 1) + 1))
    }

    const getRandomCharacter = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${randomNum(count)}`)
        const data = await response.json()
        let array = []
        array.push(data)
        setRandomCharacter(array)
    }
    
    return(
        <div className="vh">
            <div className="generate-detail">
                {randomCharacter &&
                    randomCharacter.map(elem => 
                        <div className="random-return">
                            <div className="container-random">
                                <div className="card">
                                    <img src={elem.image}/>
                                    <div className="datos">
                                        <div>
                                            <div>Name: <span>{elem.name}</span></div>
                                            <div>Specie: <span>{elem.species}</span></div>
                                            <div>Gender: <span>{elem.gender}</span></div>
                                            {
                                            (elem.status === "Alive") ? 
                                                <div className="status">
                                                    <div className="green">•</div>
                                                    {elem.status} 
                                                </div> 
                                                : 
                                                <div className="status">
                                                    <div className="red">•</div>
                                                    {elem.status} 
                                                </div> 
                                            }
                                            <div>Origin: <span>{elem.origin.name}</span></div>
                                            <div>Location: <span>{elem.location.name}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                {count &&
                    <button className="random-button" onClick={getRandomCharacter}>
                        <div>Generate random character</div>
                    </button> 
                }
            </div>
        </div>
    )
}

export default Random