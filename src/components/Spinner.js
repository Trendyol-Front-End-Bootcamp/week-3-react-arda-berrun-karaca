import React from 'react';
import './styles/Spinner.css';

function Spinner() {
  return (
    <img
      className="spinner"
      alt="Loading"
      src={`${process.env.PUBLIC_URL}/assets/loading-spinner.png`}
    />
  );
}

export default Spinner;
