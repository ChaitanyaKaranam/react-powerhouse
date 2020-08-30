import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

function Character({ character }) {

    let { name, image, id } = character;
    let history = useHistory();
    let { url } = useRouteMatch();

    return (
        <div className="card black character" onClick={() => history.push(`${url}/${id}`)}>
            <div>
                <img alt={name} src={image} />
            </div>
            <div className="card-content">
                <strong className="green-text">{name}</strong>
            </div>
        </div>
    );
}

export default Character;