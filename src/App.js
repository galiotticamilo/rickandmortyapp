import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Random from "./components/Random"
import Advanced from './components/Advanced';
import CharacterDetail from './components/CharacterDetail';
import { RAMProvider } from './context/Context';

function App() {

  return (
    <RAMProvider>
      <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route exact path="/">
              <HomePage/>
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
      </RAMProvider>
  );
}

export default App;
