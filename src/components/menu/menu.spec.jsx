import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Menu from './menu';

const comp = shallow(<Menu />);

test('should mount', () => {
  expect(comp.find('.menu').length).to.be.equal(1);
});

test('should change page to /#/favourites', () => {
  comp.find('.menu__button-fav').simulate('click', { target: { value: 'favourites' } });
  expect(window.location.href).to.be.equal('http://localhost:8000/#/favourites');
});
