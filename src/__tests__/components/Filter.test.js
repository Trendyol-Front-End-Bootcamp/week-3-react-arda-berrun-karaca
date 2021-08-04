import React from 'react';
import { shallow } from 'enzyme';

import Filter from '../../components/Filter';

const simulateChange = (wrapper, selectorName, newValue) => {
  const input = wrapper.find({ name: selectorName });
  input.simulate('change', {
    target: { name: selectorName, value: newValue },
  });

  return wrapper.find({ name: selectorName });
};

describe('Filter tests', () => {
  it('should be defined', () => {
    expect(Filter).toBeDefined();
  });

  it('should have an empty string of initial values', () => {
    const wrapper = shallow(
      <Filter searchQueries={{ name: '', gender: '', status: '' }} />
    );

    const nameInput = wrapper.find({ name: 'name' });
    const genderSelect = wrapper.find({ name: 'gender' });
    const statusSelect = wrapper.find({ name: 'status' });

    expect(nameInput.props().value).toEqual('');
    expect(genderSelect.props().value).toEqual('');
    expect(statusSelect.props().value).toEqual('');
  });

  it('should change value when form item is changed', () => {
    const wrapper = shallow(
      <Filter searchQueries={{ name: '', gender: '', status: '' }} />
    );

    const nameInput = simulateChange(wrapper, 'name', 'Rick');
    const genderSelect = simulateChange(wrapper, 'gender', 'Male');
    const statusSelect = simulateChange(wrapper, 'status', 'Alive');

    expect(nameInput.props().value).toEqual('Rick');
    expect(genderSelect.props().value).toEqual('Male');
    expect(statusSelect.props().value).toEqual('Alive');
  });

  it('should submit successfully', () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');

    useStateSpy.mockImplementation((init) => [init, setState]);

    const wrapper = shallow(
      <Filter
        searchQueries={{ name: '', gender: '', status: '' }}
        setSearchQueries={setState}
        setPage={setState}
      />
    );

    expect(setState).not.toHaveBeenCalled();

    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });

    expect(setState).toHaveBeenCalledTimes(2);  
  });
});
