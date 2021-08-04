import React from 'react';
import { shallow, mount } from 'enzyme';

import Button from '../../components/Button';

describe('Button tests', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Button>Next Page</Button>);

    expect(wrapper.find('button').text()).toEqual('Next Page');
  });

  it('should be disabled', () => {
    const wrapper = shallow(<Button disabled>Disabled Button</Button>);

    expect(wrapper.prop('disabled')).toEqual(true);
  });

  it('should works when clicked', () => {
    const mockOnClick = jest.fn();

    const button = shallow((<Button onClick={mockOnClick}>Click</Button>));   
    
    expect(mockOnClick).not.toHaveBeenCalled();
    
    button.find('button').simulate('click');

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should does nothing when disabled', () => {
    const mockOnClick = jest.fn();

    const button = mount((<Button onClick={mockOnClick} disabled>Click</Button>));   
    
    expect(mockOnClick).not.toHaveBeenCalled();
    
    button.find('button').simulate('click');

    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });
});
