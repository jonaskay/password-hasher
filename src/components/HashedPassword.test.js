import React from 'react';
import { shallow } from 'enzyme';
import HashedPassword from './HashedPassword';

describe('HashedPassword', () => {
  it('renders correctly', () => {
    expect(shallow(<HashedPassword />)).toMatchSnapshot();
  });
});
