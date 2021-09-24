import React from "react";
import {Link} from "react-router-dom";

function Character( {data} ) {

    return(
        <div className="item">
            {
                data?.map(elem => 
                    <div className="contenedor-item">
                        <div className="name">{elem.name}</div>
                        <Link to={`/character/${elem.id}`}>
                            <img className="img" src={elem.image}/>
                        </Link>
                        <div className="info">
                            <div>
                                {elem.species}
                            </div>
                            {
                            (elem.status == "Alive") ? 
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