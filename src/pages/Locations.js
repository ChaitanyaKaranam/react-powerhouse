import React, { useState, useEffect } from 'react';
import { LOCATIONS_API } from '../api/rickmorty';
import Loading from '../components/Loading';
import Location from '../components/Location';

function Locations(props) {

    let [locations, setLocations] = useState(null);

    useEffect(() => {
        try{
            fetch(LOCATIONS_API)
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    if(res.results && Array.isArray(res.results)){
                        setLocations(res.results)
                    }
                })
                .catch(err => console.log(err))
        }catch(e){
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
                        <div key={location.id} className="col s4">
                            <Location location={location}/>
                        </div>
                    )
                })}
            </div>
            
        </div>
    );
}

export default Locations;