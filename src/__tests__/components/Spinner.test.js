import React from 'react';
import renderer from 'react-test-renderer';

import Spinner from '../../components/Spinner';

describe('Spinner tests', () => {
  it('should be defined', () => {
    expect(Spinner).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = renderer.create(<Spinner />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
