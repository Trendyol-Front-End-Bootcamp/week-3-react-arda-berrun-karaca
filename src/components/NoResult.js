import React from 'react';
import Button from './Button';

import './styles/NoResult.css';

function NoResult({ buttonClick }) {
  return (
    <div className="no-result">
      <img src={`${process.env.PUBLIC_URL}/assets/rick.png`} alt="Rick" />
      <h1>No Result</h1>
      <Button onClick={buttonClick}>Go Back</Button>
    </div>
  );
}

export default NoResult;
