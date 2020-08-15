import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function Location({ location }) {

    let { name, id, dimension, type, residents } = location;
    let history = useHistory();
    let { pathname } = useLocation();


    return (
        <div className="card black location" onClick={() => {history.push(`${pathname}/${id}`)}}>
            <div className="card-content">
                <strong className="green-text">{name}</strong>
                <br/>
                <ul className="collection">
                    <li className="collection-item"><strong>Dimension: </strong>{dimension}</li>
                    <li className="collection-item"><strong>Type: </strong>{type}</li>
                    <li className="collection-item"><strong>Residents: </strong>{residents.length}</li>
                </ul>
            </div>
        </div>
    );
}

export default Location;