import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import './styles/NoMatch.css';

function NoMatch() {
  const history = useHistory();

  return (
    <div className="nomatch">
      <div className="nomatch__container">
        <h3>Oh no! Seems you're in a pickle, Rick!</h3>
        <h4>Page not found</h4>
        <h1>404</h1>
        <Button onClick={() => history.push('/')}>Go Back</Button>
      </div>
    </div>
  );
}

export default NoMatch;
