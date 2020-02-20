import React from 'react';
import SearchBarHome from '../components/SearchBarHome';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

describe('Home component', () => {
    it('starts with a term of "" ', () => {
        const wrapper = shallow (<SearchBarHome/>)
        const termState = wrapper.state().term
        expect(termState).toEqual('');
    })
    it('starts with a show of false', ()=>{
        const wrapper = shallow (<SearchBarHome/>)
        const showState = wrapper.state().showEverything
        expect(showState).toEqual(false);
    })
    it('should change show when button is clicked', () => {
        const wrapper = shallow(<SearchBarHome/>);
        const button = wrapper.find('span');
        button.simulate('click');
        const showState = wrapper.state().showEverything
        expect(showState).toEqual(true);
    })
    
})