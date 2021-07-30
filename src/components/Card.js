import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Card.css';

function Card({ id, name, status, species, gender, image, location }) {
  return (
    <article className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <div className="card-content-section">
          <Link to={`/character/${id}`}>
            <h3>{name}</h3>
          </Link>
          <span className="info">
            <span
              className={`status ${
                status === 'Alive'
                  ? 'status-alive'
                  : status === 'Dead'
                  ? 'status-dead'
                  : 'status-unknown'
              }`}
            ></span>
            {status} - {species} - {gender}
          </span>
        </div>
        <div className="card-content-section">
          <span>Last known location:</span>
          <p>{location}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
