import React, {useState, useEffect} from "react"
import { useParams } from "react-router"
import {Link} from "react-router-dom"


function CharacterDetail() {

    const { id } = useParams()

    const [character, setCharacter] = useState()

    const getCharacterDetail = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        console.log(response)
        const data = await response.json()
        setCharacter(data)
    }

    useEffect(() => {
        getCharacterDetail()
    }, [])

    return(
        <div className="character-detail">
            <div className="container-card">
                <div className="detail-container">
                    {character && 
                        <div className="card">
                            <img src={character.image}/>
                            <div className="datos">
                                <div>
                                    <div>Name: <span>{character.name}</span></div>
                                    <div>Specie: <span>{character.species}</span></div>
                                    <div>Gender: <span>{character.gender}</span></div>
                                    {
                                    (character.status == "Alive") ? 
                                        <div className="status">
                                            <div className="green">•</div>
                                            {character.status} 
                                        </div> 
                                        : 
                                        <div className="status">
                                            <div className="red">•</div>
                                            {character.status} 
                                        </div> 
                                    }
                                    <div>Origin: <span>{character.origin.name}</span></div>
                                    <div>Location: <span>{character.location.name}</span></div>
                                </div>
                                <Link className="none" to="/">
                                    <div className="back-button">Back</div>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CharacterDetail