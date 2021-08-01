import React from 'react';
import {shallow} from 'enzyme';
import MainButton from './index';

//main button test setup
const setUp = () => {
    const com = shallow(<MainButton />);
    return com;
}

describe('Testing if the button renders', () => {
    it('Button parent container', ()=>{
        const com = setUp();
        const wrap = com.find('.center-div')
        expect(wrap.length).toBe(1);
    })
    it('btn child class',() => {
        const comp = setUp();
        const wrapper = comp.find('.child')
        expect(wrapper.length).toBe(1)
    })
})