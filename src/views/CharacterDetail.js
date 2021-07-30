import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from '../components/Button';
import NoResult from '../components/NoResult';
import Spinner from '../components/Spinner';
import { getCharacter, getEpisodesInfo } from '../services/character-service';
import './styles/CharacterDetail.css';

function CharacterDetail() {
  const [character, setCharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    setLoading(true);

    (async () => {
      const characterData = await getCharacter(id);

      setCharacter(characterData);
      setLoading(false);
    })();
  }, [id]);

  useEffect(() => {
    // If the current character has episode array,
    // slice from the end 5 times and create api call for each episode.
    if (character.episode) {
      (async () => {
        const lastFiveEpisodesOfCharacater = character.episode.slice(-5);

        const episodeNames = await getEpisodesInfo(
          lastFiveEpisodesOfCharacater
        );

        setEpisodes(episodeNames);
      })();
    }
  }, [character]);

  return loading ? (
    <Spinner />
  ) : character.error ? (
    <NoResult buttonClick={() => history.push('/')} />
  ) : (
    <div className="character">
      <div>
        <Button onClick={() => history.push('/')}>Go Back</Button>
        <div className="character-info">
          <img src={character.image} alt={character.name} />
          <div className="character-detail">
            <h1>{character.name}</h1>
            <p>
              <span>Status:</span> {character.status}
            </p>
            <p>
              <span>Gender:</span> {character.gender}
            </p>
            <p>
              <span>Species:</span> {character.species}
            </p>
            <p>
              <span>Last episodes: </span>
            </p>
            {episodes.map((ep) => (
              <p key={ep.name}>
                {ep.episode}: {ep.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
