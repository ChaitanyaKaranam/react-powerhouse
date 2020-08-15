import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Characters from './pages/Characters';
import Navigation from './components/Navigation';
import Locations from './pages/Locations';
import './styles/main.css';
import CharacterDetails from './components/CharacterDetails';
import LocationDetails from './components/LocationDetails';


function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>          
          <Route path="/locations/:id" component={LocationDetails} />
          <Route path="/locations" component={Locations} />

          <Route path="/characters/:id" component={CharacterDetails} />
          <Route path="/characters" component={Characters} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="container home">
      <h1>Rick and Morty Router</h1>
      <div className="poster">
        <img alt="Rick and Morty" src="https://i.guim.co.uk/img/media/b563ac5db4b4a4e1197c586bbca3edebca9173cd/0_12_3307_1985/master/3307.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=61a26bf43da26e4ca97e932e5ee113f7"/>
      </div>
    </div>
  )
}

export default App;
