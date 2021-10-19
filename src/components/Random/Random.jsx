import React, {useState} from "react"
import { useEffect } from "react/cjs/react.development";
import useRAM from "../../context/Context"
import "../Random/Random.css"

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
        <div className="main-random-container">
            <div className="buttom-random-detail-container">
                {randomCharacter &&
                    randomCharacter.map(elem => 
                        <div className="random-detail-container">
                                <div className="card">
                                    <img className="detail-img"src={elem.image}/>
                                    <div className="data">
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