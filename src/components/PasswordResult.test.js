import React from 'react';
import { shallow } from 'enzyme';
import PasswordResult from './PasswordResult';

describe('PasswordResult', () => {
  it('renders correctly', () => {
    expect(shallow(<PasswordResult result="foobar" />)).toMatchSnapshot();
  });
});
