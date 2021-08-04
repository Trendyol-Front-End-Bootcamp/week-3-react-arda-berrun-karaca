import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import { Router, BrowserRouter } from 'react-router-dom';

import NoMatch from '../../views/NoMatch';
import Button from '../../components/Button';

describe('NoMatch tests', () => {
  it('should be defined', () => {
    expect(NoMatch).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = renderer
      .create(
        <BrowserRouter>
          <NoMatch />
        </BrowserRouter>
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('should push to the correct location when the button clicked', () => {
    const history = createMemoryHistory();

    const wrapper = mount(
      <Router history={history}>
        <NoMatch />
      </Router>
    );

    wrapper.find(Button).simulate('click');

    expect(history.location.pathname).toBe('/');
  });
});
