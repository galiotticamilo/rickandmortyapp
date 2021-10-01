import React from "react";
import {Link} from "react-router-dom";
import "../Character/Character.css"

function Character( {data} ) {

    return(
        <div className="main-character-container">
            {
                data?.map(elem => 
                    <div className="character-container">
                        <div className="name">{elem.name}</div>
                        <Link to={`/character/${elem.id}`}>
                            <img className="img" src={elem.image}/>
                        </Link>
                        <div className="info-container">
                            <div>
                                {elem.species}
                            </div>
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
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Character