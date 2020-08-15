import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function Character({ character }) {

    let { image, name, id } = character;
    let history = useHistory();
    let location = useLocation();

    return (
        <div className="character card black" onClick={() => history.push(`${location.pathname}/${id}`)}>
            <div>
                <img alt={name} src={image}/>
            </div>
            <div className="card-content">
                <strong className="green-text">{name}</strong>
            </div>
        </div>
    )
}

export default Character;