import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Random from "./components/Random"
import Advanced from './components/Advanced';
import CharacterDetail from './components/CharacterDetail';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <CharacterList/>
          </Route>

          <Route exact path="/random-character">
            <Random/>
          </Route>

          <Route exact path="/advanced-search">
            <Advanced/>
          </Route>

          <Route exact path="/character/:id">
            <CharacterDetail/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
