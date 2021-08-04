import React from 'react';
import renderer from 'react-test-renderer';

import Card, { addStatusClass } from '../../components/Card';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Card tests', () => {
  it('should be defined', () => {
    expect(Card).toBeDefined();
  });

  it('should render correctly', () => {
    const props = {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        gender: 'Male',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        location: 'Earth'
    };

    const wrapper = renderer.create(
      <Router>
        <Card {...props} />
      </Router>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('should be an element with the status-alive class', () => {
    expect(addStatusClass('Alive')).toEqual('status-alive');
  });

  it('should be an element with the status-dead class', () => {
    expect(addStatusClass('Dead')).toEqual('status-dead');
  });

  it('should be an element with the status-unknown class', () => {
    expect(addStatusClass('dlkdak')).toEqual('status-unknown');
    expect(addStatusClass()).toEqual('status-unknown');
  });
});
