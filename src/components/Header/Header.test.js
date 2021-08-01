import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';

//setup function for header component
const setUp = () => {
    const component = shallow(<Header />);
    return component;
}

const findByTest = (com,dataTest) =>{
    const wrapper= com.find(`[data-test='${dataTest}']`);
    return wrapper;

}

describe('Header Component tests', () =>{
    it('It should render without errors', () =>{
        const component = setUp();
        const wrapper = findByTest(component,'HeaderComponent')
    expect(wrapper.length).toBe(1);
})

})
