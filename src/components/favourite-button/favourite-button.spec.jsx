import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import FavouriteButton from './favourite-button';

// Mock spies
const spyCallback = sinon.spy();
const spyCallback2 = sinon.spy();
const spySaveFavouriteMovie = sinon.spy();
const spySaveFavouriteMovie2 = sinon.spy();

// Mock data
const mockMovie = {
  Title: 'hello',
};
const mockFavouriteMovies = [];
const mockFavouriteMoviesAlreadySaved = [mockMovie];


// Test component
const comp = shallow(
  <FavouriteButton
    movie={mockMovie}
    callback={spyCallback}
    favouriteMovies={mockFavouriteMovies}
    saveFavouriteMovie={spySaveFavouriteMovie}
  />);

test('should mount', () => {
  expect(comp.find('.fav-btn').length).to.be.equal(1);
});

test('should call saveFavouriteMovie on click', () => {
  comp.find('.fav-btn').simulate('click');
  expect(spySaveFavouriteMovie.calledOnce).to.be.true;
});

test('should call callback on click', () => {
  expect(spyCallback.calledOnce).to.be.true;
});

test('should return false isFavourited', () => {
  expect(comp.instance().isFavourited(mockMovie)).to.be.false;
});

const compAlreadyFaved = shallow(
  <FavouriteButton
    movie={mockMovie}
    callback={spyCallback}
    favouriteMovies={mockFavouriteMoviesAlreadySaved}
    saveFavouriteMovie={spySaveFavouriteMovie}
  />);

test('should return false isFavourited', () => {
  expect(compAlreadyFaved.instance().isFavourited(mockMovie)).to.be.true;
});

test('should NOT call saveFavouriteMovie on click', () => {
  compAlreadyFaved.find('.fav-btn').simulate('click');
  expect(spySaveFavouriteMovie2.called).to.be.false;
});

test('should NOT call callback on click', () => {
  expect(spyCallback2.called).to.be.false;
});
