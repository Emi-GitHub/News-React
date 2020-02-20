import React from 'react';
import ButtonBar from '../components/ButtonBar';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

describe('ButtonBar component', () => {
    it('Should show text', () => {
        const wrapper = shallow(<ButtonBar/>);
        const text = wrapper.find('button');
        expect(text.text()).toBe('Load more');
    })
    it('starts with a show of false', ()=>{
        const wrapper = shallow (<ButtonBar/>)
        const showState = wrapper.state().show
        expect(showState).toEqual(false);
    })
    it('should show cards when button is clicked', () => {
        const wrapper = shallow(<ButtonBar/>);
        const button = wrapper.find('button');
        button.simulate('click');
        const showState = wrapper.state().show
        expect(showState).toEqual(true);
    })
})