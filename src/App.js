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
      <img alt="Rick and Morty" src="https://upload.wikimedia.org/wikipedia/en/3/32/Rick_and_Morty_opening_credits.jpeg"/>
    </div>
  )
}

export default App;
