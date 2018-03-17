import React from 'react';
import { shallow } from 'enzyme';
import PasswordForm from './PasswordForm';

describe('PasswordForm', () => {
  it('renders correctly', () => {
    expect(shallow(<PasswordForm />)).toMatchSnapshot();
  });
});
