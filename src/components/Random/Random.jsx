import React, {useState} from "react"
import { useEffect } from "react/cjs/react.development";
import useRAM from "../../context/Context"
import "../Random/Random.css"

function Random() {

    const {charactersInfo, getCharacters, urlDefault} = useRAM()

    const [randomCharacter, setRandomCharacter] = useState()

    useEffect(() => {
        getCharacters(urlDefault)
    }, [])

    const randomNum = (count) => {
        return (Math.floor(Math.random() * (count - 1) + 1))
    }

    const getRandomCharacter = async () => {
        const response = await fetch(`${urlDefault}/${randomNum(charactersInfo.count)}`)
        const data = await response.json()
        setRandomCharacter(data)
    }
    
    return(
        <div className="main-random-container">
            <div className="buttom-random-detail-container">
                {randomCharacter &&
                        <div className="random-detail-container">
                                <div className="card">
                                    <img className="detail-img"src={randomCharacter.image}/>
                                    <div className="data">
                                        <div>
                                            <div>Name: <span>{randomCharacter.name}</span></div>
                                            <div>Specie: <span>{randomCharacter.species}</span></div>
                                            <div>Gender: <span>{randomCharacter.gender}</span></div>
                                            {
                                            (randomCharacter.status === "Alive") ? 
                                                <div className="status">
                                                    <div className="green">•</div>
                                                    {randomCharacter.status} 
                                                </div> 
                                                :
                                                <div className="status">
                                                    <div className="red">•</div>
                                                    {randomCharacter.status} 
                                                </div> 
                                            }
                                            <div>Origin: <span>{randomCharacter.origin.name}</span></div>
                                            <div>Location: <span>{randomCharacter.location.name}</span></div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                }
                {charactersInfo.count &&
                    <button className="random-button" onClick={getRandomCharacter}>
                        <div>Generate random character</div>
                    </button> 
                }
            </div>
        </div>
    )
}

export default Random