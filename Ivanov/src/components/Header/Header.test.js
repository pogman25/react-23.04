import React from 'react';
import {configure,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header'

configure({ adapter: new Adapter() });
it('renders correctly', () => {
    
    const wrapper = render(<Header name='Nick' lastname='Johnson'></Header>);
    expect(wrapper).toMatchSnapshot();
});