import React, {useState, useEffect} from "react"
import { useParams } from "react-router"
import {Link} from "react-router-dom"
import "../CharacterDetail/CharacterDetail.css"

function CharacterDetail() {

    const { id } = useParams()

    const [character, setCharacter] = useState()

    const getCharacterDetail = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        setCharacter(data)
    }

    useEffect(() => {
        getCharacterDetail()
    }, [])

    return(
        <div className="main-detail-container">
                    {character && 
                        <div className="card">
                            <img className="detail-img"src={character.image}/>
                            <div className="data">
                                    <div className="detail-single-info">Name: <span>{character.name}</span></div>
                                    <div className="detail-single-info">Specie: <span>{character.species}</span></div>
                                    <div className="detail-single-info">Gender: <span>{character.gender}</span></div>
                                    {
                                    (character.status === "Alive") ? 
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
                                    <div className="location-margin">Location: <span>{character.location.name}</span></div>
                            </div>
                            <Link className="back-button-container" to="/advanced-search">
                                <div className="back-button">Back</div>
                            </Link>
                        </div>
                    }
        </div>
    )
}

export default CharacterDetail