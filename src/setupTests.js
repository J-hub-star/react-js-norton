import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

//configuring Enzyme
Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods:true
});
