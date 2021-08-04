import React from 'react';
import renderer from 'react-test-renderer';

import CharacterList from '../../components/CharacterList';
import { BrowserRouter as Router } from 'react-router-dom';

describe('CharacterList tests', () => {
  it('should be defined', () => {
    expect(CharacterList).toBeDefined();
  });

  it('should render correctly', () => {
    const characters = [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        origin: { name: 'Earth' },
      },
      {
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        origin: { name: 'Earth' },
      },
    ];

    const wrapper = renderer
      .create(
        <Router>
          <CharacterList characters={characters} />
        </Router>
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
