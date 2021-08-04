import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import App from '../App';
import Home from '../views/Home';
import CharacterDetail from '../views/CharacterDetail';
import NoMatch from '../views/NoMatch';

jest.mock('../views/Home');
jest.mock('../views/CharacterDetail');
jest.mock('../views/NoMatch');

describe('Router tests', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });

  it('should render Home page on default route', () => {
    Home.mockImplementation(() => <div>Home page</div>);

    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find('div').text()).toEqual('Home page');
  });

  it('should render CharacterDetail page on /character/:id route', () => {
    CharacterDetail.mockImplementation(() => <div>Character Detail</div>);

    const wrapper = mount(
      <MemoryRouter initialEntries={['/character/2']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find('div').text()).toEqual('Character Detail');
  });

  it('should render NoMatch page on invalid route', () => {
    NoMatch.mockImplementation(() => <div>No Match</div>);

    const wrapper = mount(
      <MemoryRouter initialEntries={['/dasjlkdad']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find('div').text()).toEqual('No Match');
  });
});
