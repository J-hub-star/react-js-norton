import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';

//setup function for header component
const setUp = () => {
    const component = shallow(<Header />);
    return component;
}

describe('Header Component tests', () =>{
    it('It should render without errors', () =>{
        const component = setUp();
        const wrapper = component.find('.HeaderComponent')
    expect(wrapper.length).toBe(1);
})

})
