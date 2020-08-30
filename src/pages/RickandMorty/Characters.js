import React, { useState, useEffect } from 'react';
import { CHARACTERS_API } from '../../api/rickandmorty';
import Loading from '../../components/Loading';
import Character from '../../components/Character';

function Characters(props) {

    let [characters, setCharacters] = useState(null);

    useEffect(() => {
        try{
            fetch(CHARACTERS_API)
                .then(res => res.json())
                .then(({ results }) => {
                    if(results && Array.isArray(results)){
                        setCharacters(results)
                    }
                })
                .catch(err => console.log(err))
        }catch(e){
            console.log(e)
        }
    }, []);

    if(!characters){
        return <Loading/>
    }

    return (
        <div className="container">
            <h2>Characters</h2>
            <hr/>
            <div className="row">
                { characters.map(character => {
                    return(
                        <div className="col s12 m4 l3" key={character.id}>
                            <Character character={character}/>
                        </div>    
                    )
                })}
            </div>
        </div>
    );
}

export default Characters;