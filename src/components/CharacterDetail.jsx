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
        <div>
            {character && 
                <div>
                    <div>Name: {character.name}</div>
                    <img src={character.image}/>
                    <div>Specie: {character.species}</div>
                    <div>Gender: {character.gender}</div>
                    <div>Status: {character.status}</div>
                    <div>Origin: {character.origin.name}</div>
                    <div>Location: {character.location.name}</div>
                </div>
            }
            <Link to="/">
                <div>Back</div>
            </Link>
        </div>
    )
}

export default CharacterDetail