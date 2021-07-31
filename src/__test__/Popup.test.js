import '@testing-library/jest-dom';
import * as React from 'react'
import App from '../App';
import HomePage from '../pages/HomePage';
import {render, fireEvent, screen} from '@testing-library/react';
import { shallow } from 'enzyme';
import Popup from '../components/Popup';

describe('App component', () => {
    it('starts with a count of 0', () => {
      const wrapper = shallow(<HomePage />);
      const text = wrapper.find('Welcome').text();
      expect(text).toEqual('Planet Portal');
    });
  });
