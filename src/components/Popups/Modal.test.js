import React from 'react';
import {shallow} from 'enzyme';
import ModalOrphan from './ModalOrphan'
import Popup from './ModelHot';

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

describe('Pop tests',() =>{
    it('Orphan Pop up',() =>{
        const com = shallow(<ModalOrphan planets={data} handleClose={() => {}}/>)
        const wrapper = com.find('.popup-box')
        expect(wrapper.length).toBe(1)
    })
    it('Hot Planet Test',() => {
        const com = shallow(<Popup content='content' boilerPlate='new'/>)
      
        const wrapper = com.find('.popup-box')
        expect(wrapper.length).toBe(1)
    })
})
