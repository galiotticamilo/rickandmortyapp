import React from "react";
import {Link} from "react-router-dom";

function Character( {data} ) {

    return(
        <div className="item">
            {
                data?.map(elem => 
                    <div className="contenedor-item">
                        <div>{elem.name}</div>
                        <Link to={`/character/${elem.id}`}>
                            <img className="img" src={elem.image}/>
                        </Link>
                        {elem.status}
                    </div>
                )
            }
        </div>
    )
}
export default Character