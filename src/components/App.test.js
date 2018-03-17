import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

const mounted = mount(<App />);

describe('App', () => {
  it('renders correctly', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

  it('handles a domain input change', () => {
    mounted.find('input[name="domain"]')
      .simulate('change', { target: { name: 'domain', value: 'foo' } });

    expect(mounted.state().domain).toBe('foo');
  });

  it('handles a password input change', () => {
    mounted.find('input[name="password"]')
      .simulate('change', { target: { name: 'password', value: 'foo' } });

    expect(mounted.state().password).toBe('foo');
  });

  it('handles a form submit', () => {
    mounted.find('form').simulate('submit');
    expect(mounted.state().result).toBe('password');
  });
});
