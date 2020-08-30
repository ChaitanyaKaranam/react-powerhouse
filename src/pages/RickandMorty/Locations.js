import React, { useState, useEffect } from 'react';
import { LOCATION_API } from '../../api/rickandmorty';
import Loading from '../../components/Loading';
import Location from '../../components/Location';

function Locations(props) {

    let [locations, setLocations] = useState(null);

    useEffect(() => {
        try {
            fetch(LOCATION_API)
                .then(res => res.json())
                .then(res => res && res.results && Array.isArray(res.results) && setLocations(res.results))
                .catch(err => console.log(err))
        } catch (e) {
            console.log(e)
        }
    }, [])

    if(!locations){
        return <Loading/>
    }

    return (
        <div className="container">
            <h2>Locations</h2>
            <hr/>
            <div className="row">
                { locations.map(location => {
                    return(
                        <div className="col s12 m6 l4" key={location.id}>
                            <Location location={location}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Locations;