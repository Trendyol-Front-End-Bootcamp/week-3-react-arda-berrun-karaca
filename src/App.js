import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './views/Home';
import CharacterDetail from './views/CharacterDetail';
import NoMatch from './views/NoMatch';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/character/:id" component={CharacterDetail} />
        <Route path="*" component={NoMatch} />
      </Switch>
  );
}

export default App;
