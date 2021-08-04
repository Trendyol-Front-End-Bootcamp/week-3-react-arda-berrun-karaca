import React from 'react';
import { shallow } from 'enzyme';

import Pagination from '../../components/Pagination';
import Button from '../../components/Button';

describe('Pagination tests', () => {
  it('should be defined', () => {
    expect(Pagination).toBeDefined();
  });

  it('should render correctly with two buttons', () => {
    const wrapper = shallow(<Pagination />);

    expect(wrapper.find(Button).length).toEqual(2);
  });

  it('should be disabled the buttons correctly that according to the next and prev props', () => {
    const wrapper = shallow(<Pagination next={true} prev={false} />);

    expect(wrapper.find(Button).first().prop('disabled')).toBeTruthy(); // Previous Button
    expect(wrapper.find(Button).last().prop('disabled')).toBeFalsy(); // Next Button
  });

  it('should be change the state correctly when the buttons are clicked', () => {
    const mockPreviousPage = jest.fn(page => page - 1);
    const mockNextPage = jest.fn(page => page + 1);

    const wrapper = shallow(<Pagination next={false} prev={true} setPage={mockPreviousPage} />);

    const previousButton = wrapper.find(Button).first();
        
    expect(mockPreviousPage.mock.calls.length).toEqual(0);    
    
    previousButton.simulate('click');
    expect(mockPreviousPage.mock.calls.length).toEqual(1);
    expect(mockPreviousPage(4)).toBe(3);

    wrapper.setProps({ setPage: mockNextPage, next: true });
    wrapper.update();

    const nextButton = wrapper.find(Button).last();

    expect(mockNextPage.mock.calls.length).toEqual(0);    
    
    nextButton.simulate('click');
    expect(mockNextPage.mock.calls.length).toEqual(1);
    expect(mockNextPage(4)).toBe(5);
    
  });
});
