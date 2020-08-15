import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Loading from './Loading';
import { LOCATION_DETAILS_API } from '../api/rickmorty';

function LocationDetails(props) {

    let [locationDetails, setLocationDetails] = useState(null);
    let [characters, setCharacters] = useState(null);
    let { id } = useParams();
    let history = useHistory();


    useEffect(() => {

        const fetchResidents = (residents) => {
            let newCharacters = [];
            Promise.all(residents.map(resident => fetch(resident)))
                .then(responses => Promise.all(responses.map(response => response.json())))
                .then(data => setCharacters(data));
            setCharacters(newCharacters);
        }


        try {
            fetch(`${LOCATION_DETAILS_API}/${id}`)
                .then(res => res.json())
                .then(res => {
                    setLocationDetails(res);
                    if (res.residents) {
                        fetchResidents(res.residents)
                    }
                })
                .catch(err => console.log(err))
        } catch (e) {
            console.log(e)
        }


    }, [id])

    if (!locationDetails) {
        return <Loading />
    }

    const renderResidents = () => {
        if (!characters) {
            return <Loading />
        } else {
            return characters.map(character => {
                return (
                    <div className="col s1 avatar" key={character.id} onClick={() => history.push(`/characters/${character.id}`)}>
                        <img alt={character.name} title={character.name} src={character.image} className="circle" width="50" />
                    </div>
                )
            })
        }
    }

    return (
        <div className="container">
            <br />
            <Link to="/locations">{`<Back`}</Link>
            <h3>{locationDetails['name']}</h3>
            <hr />
            <ul className="collection">
                <li className="collection-item"><strong>Dimension: </strong>{locationDetails.dimension}</li>
                <li className="collection-item"><strong>Type: </strong>{locationDetails.type}</li>
            </ul>
            <br />
            <h5>Residents - {locationDetails.residents.length}</h5>
            <hr />
            <div className="row">
                {renderResidents()}
            </div>
        </div>
    );
}

export default LocationDetails;