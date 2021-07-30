import React from 'react';
import Card from './Card';
import './styles/CharacterList.css';

function CharacterList({ characters }) {
  return (
    <div className="character-list">
      {characters?.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          image={character.image}
          location={character.origin.name}
        />
      ))}
    </div>
  );
}

export default CharacterList;
