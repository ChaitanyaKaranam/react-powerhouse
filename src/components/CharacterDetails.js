import React, { useState, useEffect } from 'react';
import { CHARACTER_DETAILS_API } from '../api/rickmorty';
import { useParams, Link } from 'react-router-dom';
import Loading from './Loading';

function CharacterDetails(props) {

    let [charDetails, setCharDetails] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        try {
            fetch(`${CHARACTER_DETAILS_API}/${id}`)
                .then(res => res.json())
                .then(res => {
                    setCharDetails(res);
                })
                .catch(err => console.log(err))
        } catch (e) {
            console.log(e);
        }
    }, [id])

    if (!charDetails) {
        return (
            <Loading />
        )
    }

    return (
        <div className="container">
            <br />
            <Link to="/characters">{`<Back`}</Link>
            <h3>{charDetails['name']}</h3>
            <hr />
            <div className="charDetails">
                <div>
                    <img alt={charDetails['name']} src={charDetails['image']} width={215} />
                </div>
                <div>
                    <ul className="collection">
                        <li className="collection-item"><strong>Origin: </strong>{charDetails['origin']['name']}</li>
                        <li className="collection-item"><strong>Location: </strong>{
                            <Link to={`/locations/${charDetails['location']['url'].split('/').pop()}`}>{charDetails['location']['name']}</Link>
                        }</li>
                        <li className="collection-item"><strong>Species: </strong>{charDetails['species']}</li>
                        <li className="collection-item"><strong>Status: </strong>{charDetails['status']}</li>
                        <li className="collection-item"><strong>Gender: </strong>{charDetails['gender']}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CharacterDetails;