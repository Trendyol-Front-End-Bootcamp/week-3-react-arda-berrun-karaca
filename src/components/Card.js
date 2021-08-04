import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Card.css';

export const addStatusClass = (status) => {
  const newStatus = status?.toLowerCase();
  if (newStatus === 'alive' || newStatus === 'dead') {
    return `status-${newStatus}`;
  }

  return 'status-unknown';
};

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
              name="status-info"
              className={`status ${addStatusClass(status)}`}
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
