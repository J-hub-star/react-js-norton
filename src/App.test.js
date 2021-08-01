import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App should be rendered', () =>{
    it('checking if >App /> renderes',() =>{
        const cpm = shallow(<App />)
        const wrap = cpm.find('.App')
        expect(wrap.length).toBe(1)
    })
})
