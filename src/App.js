import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./views/Home";
import CharacterDetail from "./views/CharacterDetail";
import NoMatch from "./views/NoMatch";

const BASE_API_URL = "https://rickandmortyapi.com/api/character";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home baseApiUrl={BASE_API_URL} />
        </Route>
        <Route path="/character/:id">
          <CharacterDetail baseApiUrl={BASE_API_URL} />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
