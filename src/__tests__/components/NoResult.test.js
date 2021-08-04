import React from 'react';
import renderer from 'react-test-renderer';

import NoResult from '../../components/NoResult';

describe('NoResult tests', () => {
  it('should be defined', () => {
    expect(NoResult).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = renderer.create(<NoResult buttonClick={() => {}} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});