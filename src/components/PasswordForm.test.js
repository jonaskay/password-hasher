import React from 'react';
import { shallow } from 'enzyme';
import PasswordForm from './PasswordForm';

describe('PasswordForm', () => {
  it('renders correctly', () => {
    const shallowed = shallow(<PasswordForm />);
    expect(shallowed).toMatchSnapshot();
  });
});
