import React from 'react';
import './styles/main.css';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Characters from './pages/RickandMorty/Characters';
import CharacterDetails from './pages/RickandMorty/CharacterDetails';
import Locations from './pages/RickandMorty/Locations';
import LocationDetails from './pages/RickandMorty/LocationDetails';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/characters/:id" component={CharacterDetails}/>
        <Route path="/characters" component={Characters} />
        <Route path="/locations/:id" component={LocationDetails}/>
        <Route path="/locations" component={Locations} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div className="container home">
      <h2>Rick and Morty Router</h2>
      <div className="poster">
        <img alt="rickandmorty router" src="https://i.guim.co.uk/img/media/b563ac5db4b4a4e1197c586bbca3edebca9173cd/0_12_3307_1985/master/3307.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=61a26bf43da26e4ca97e932e5ee113f7" />
      </div>
    </div>
  )
}

export default App;
