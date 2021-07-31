import React from "react";
import {configure, shallow} from "enzyme";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";
import getTopN from '../components/getTop';
import getMax from '../components/getMax';
import MOCK_DATA from './MOCK_DATA.json'
import { render, fireEvent, getByTestId} from "react-testing-library";
import HomePage from '../pages/HomePage.js'
configure({
   adapter: new Adapter()
});

//testing the app component
describe("Testin <App/> Component", () => {
   it("App renders a message", () => {
      const wrapper = shallow(<App />);
      const message = <p>Edit</p>;
      expect(wrapper).to.contain(message);
   });   chai.use(chaiEnzyme());})

//util tests
describe("Testing the utils for finding maximum in an array",() => {
   it("Gives an answer",() => {
      const result = getTopN(MOCK_DATA,'salary',1);
      expect(result).to.have.length(1);
   });
   chai.use(chaiEnzyme());})




