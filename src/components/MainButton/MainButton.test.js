import React from 'react';
import {shallow} from 'enzyme';
import MainButton from './index';

describe('Testing if the button renders', () => {
    it('Button parent container', ()=>{
        const com = shallow(<MainButton />)
        const wrap = com.find('.center-div')
        expect(wrap.length).toBe(1);
    })
    it('btn child class',() => {
        const comp = shallow(<MainButton />)
        const wrapper = comp.find('.child')
        expect(wrapper.length).toBe(1)
    })
})