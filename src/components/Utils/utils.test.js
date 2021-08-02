import React from 'react';
import {shallow} from 'enzyme';
import filterDataOprhanPlanets from './filterData';
import getMax from './getMax';

const data = [
    { "planetNo":1,"TypeFlag":3},
    { "planetNo":1,"TypeFlag":3},
    { "planetNo":1,"TypeFlag":3},
    { "planetNo":1,"TypeFlag":3},
    { "planetNo":1,"TypeFlag":3},
    { "planetNo":8,"TypeFlag":2},
    { "planetNo":3,"TypeFlag":2},
    { "planetNo":2,"TypeFlag":2},

    ]


describe('testing util functions',()=>{
    it('finding orphan planet test',()=>{
        const v = filterDataOprhanPlanets(data);
        expect(v.length).toBe(5)
    })
    it('finding max test',() => {
        const v = getMax(data,"planetNo")
        expect(v.planetNo).toBe(8)
    })
})