import React from 'react';
import {shallow} from 'enzyme';
import HomePage from './index';


describe('Homepage',() =>{
    it('if it renders',()=>{
        const com = shallow(<HomePage />)
        const wrap = com.find('.contianer')
        expect(wrap.length).toBe(1)
    })
})