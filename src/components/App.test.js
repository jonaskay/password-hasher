import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

const mounted = mount(<App />);

describe('<App />', () => {
  it('renders correctly', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

  it('handles a domain input change', () => {
    mounted
      .find('input[name="domain"]')
      .simulate('change', { target: { name: 'domain', value: 'foo' } });

    expect(mounted.state().domain).toBe('foo');
  });

  it('handles a password input change', () => {
    mounted
      .find('input[name="password"]')
      .simulate('change', { target: { name: 'password', value: 'foo' } });

    expect(mounted.state().password).toBe('foo');
  });

  it('handles a form submit', () => {
    mounted.find('form').simulate('submit');
    expect(mounted.state().result).toMatchSnapshot();
  });

  it('handles an empty form submit', () => {
    mounted
      .find('input[name="domain"]')
      .simulate('change', { target: { name: 'domain', value: '' } });
    mounted
      .find('input[name="password"]')
      .simulate('change', { target: { name: 'password', value: '' } });
    mounted.find('form').simulate('submit');

    expect(mounted.state().result).toMatchSnapshot();
  });
});

describe('extractDomain', () => {
  it('extracts a domain from URI', () => {
    expect(mounted.instance().extractDomain('http://foobar.example.org')).toBe('example.org');
  });
});

describe('hashPassword', () => {
  it('hashes a password with salt', () => {
    expect(mounted.instance().hashPassword('foo', 'bar')).toMatchSnapshot();
  });
});
