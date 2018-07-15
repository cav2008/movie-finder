import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Favourites from './favourites';

// Mock data
const mockArray = [];

// Test component
const comp = shallow(<Favourites favouriteMovies={mockArray} />);

test('should mount', () => {
  expect(comp.find('.page').length).to.be.equal(1);
});
