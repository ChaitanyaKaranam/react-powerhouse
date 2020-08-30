import React, { useState, useEffect } from 'react';
import { LOCATION_API } from '../../api/rickandmorty';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';

function LocationDetails({ match, history }) {

    let { id } = match.params;
    let [locationDetails, setLocationDetails] = useState(null);
    let [residents, setResidents] = useState(null);

    useEffect(() => {
        try{
            fetch(`${LOCATION_API}/${id}`)
                .then(res => res.json())
                .then(res => {
                    setLocationDetails(res);
                    if(res.residents && Array.isArray(res.residents)){
                        Promise.all(res.residents.map(resident => fetch(resident)))
                            .then(responses => Promise.all(responses.map(res => res.json())))
                            .then(res => setResidents(res))
                    }
                })
                .catch(err => console.log(err))
        }catch(e){
            console.log(e)
        }
    }, [id])

    if(!locationDetails){
        return <Loading/>
    }

    let { name, type, dimension } = locationDetails;

    return (
        <div className="container">
            <br/>
            <Link to="/locations">Back</Link>
            <h2>{name}</h2>
            <hr/>
            <ul className="collection">
                <li className="collection-item"><strong>Dimension: </strong>{dimension}</li>
                <li className="collection-item"><strong>Type: </strong>{type}</li>
            </ul>
            <br/>
            <h4>Residents</h4>
            <hr/>
            <div className="row">
                { residents && Array.isArray(residents) && residents.map(({ id, name, image }) => {
                    return(
                        <div className="col s2 avatar" key={id} onClick={() => history.push(`/characters/${id}`) }>
                            <img title={name} alt={name} src={image} className="circle"/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default LocationDetails;