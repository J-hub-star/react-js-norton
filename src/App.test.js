import React from 'react';
import {shallow,mount} from 'enzyme';
import App from './App';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';

describe('App should be rendered', () =>{
    it('checking if >App /> renderes',() =>{
        const cpm = shallow(<App />)
        const wrap = cpm.find('.App')
        expect(wrap.length).toBe(1)
    })
})
describe('testing routes',() =>{
    it('specfic routes:Home',() =>{
          const component = mount(<><MemoryRouter initialentries="{['/']}" /><App /></>)
          const wrap = component.find('.styling')
          expect(wrap.length).toBe(0)
                            
    });
    it('specfic routes:TimeLine',() =>{
          const component = mount(<><MemoryRouter initialentries="{['/TimeLine']}" /><App /></>)
          const wrap = component.find('.btn-main')
          expect(wrap.length).toBe(1)
                            
    });
    it('specfic routes:Solution',() =>{
          const component = mount(<><MemoryRouter initialentries="{['/Solutions']}" /><App /></>)
          const wrap = component.find('.btn-main')
          expect(wrap.length).toBe(1)
                            
    });
})


