import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Home from './home';

// Mock spies
const spySaveSearchResult = sinon.spy();

// Mock data
const mockArray = [];


// Test component
const comp = shallow(<Home searchResults={mockArray} saveSearchResult={spySaveSearchResult} />);

test('should mount', () => {
  expect(comp.find('.page').length).to.be.equal(1);
});
