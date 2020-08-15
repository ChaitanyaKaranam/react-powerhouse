import React, { useEffect, useState } from 'react';
import { CHARACTERS_API } from '../api/rickmorty';
import Character from '../components/Character';

function Characters(props) {

    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        try {
            fetch(CHARACTERS_API)
                .then(res => res.json())
                .then(res => {
                    if (res.results && Array.isArray(res.results)) {
                        setCharacters(res.results);
                    }
                })
                .catch(err => console.log(err))
        } catch (e) {
            console.log(e)
        }
    }, []);

    return (
        <div className="container">
            <h2>Characters</h2>
            <hr />
            <div className="row">
                {characters.map(character => {
                    return (
                        <div className="col l3 m4 s6" key={character.id}>
                            <Character character={character} pathname={props.location.pathname}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Characters;