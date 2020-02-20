import React from 'react';
import Home from '../components/Home';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

describe('Home component', () => {
    it('Should show text', () => {
        const wrapper = shallow(<Home/>);
        const text = wrapper.find('div.header-top');
        expect(text.text()).toBe('Top headlines');
    })
    it('starts with a news of []', () => {
        const wrapper = shallow (<Home/>)
        const headlinesState = wrapper.state().headlines
        expect(headlinesState).toEqual([]);
    })
    it('starts with a backgroud of ui text loader', () => {
        const wrapper = shallow (<Home/>)
        const backgroundState = wrapper.state().background
        expect(backgroundState).toEqual('ui text loader');
    })
    it('starts with a loaded of loaded-api', () => {
        const wrapper = shallow (<Home/>)
        const loadedState = wrapper.state().loaded
        expect(loadedState).toEqual('loaded-api');
    })
    it('starts with a loading of ui active inverted dimmer', () => {
        const wrapper = shallow (<Home/>)
        const loadingState = wrapper.state().loading
        expect(loadingState).toEqual('ui active inverted dimmer');
    })
    it('starts with a forSearch of hide-app', () => {
        const wrapper = shallow (<Home/>)
        const forSearchState = wrapper.state().forSearch
        expect(forSearchState).toEqual('hide-app');
    })
    it('starts with a forHeader of hide-app', () => {
        const wrapper = shallow (<Home/>)
        const forHeaderState = wrapper.state().forHeader
        expect(forHeaderState).toEqual('hide-app');
    })
})