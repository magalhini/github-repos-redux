import { shallow } from 'enzyme';
import { expect } from '../test_helper';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from '../../src/actions';
import * as types from '../../src/actions/constants';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('User Actions' , () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('should create an action to sort by number of stars', () => {
    const expectedAction = {
      type: types.SORT_BY_STARS
    };

    expect(actions.sortByStars()).to.deep.equal(expectedAction);
  });

  it('fetches the repos given a username from the Github API', () => {
    nock('http://github.com/')
      .get('/repos')
      .reply(200, { repos: [1,2,3] })

    const expectedActions = {
      type: types.GET_USER,
      payload: { repos: [1,2,3] }
    };

    const store = mockStore({ repos: [] });

    return store.dispatch(actions.searchUser('a'))
     .then(() => {
       expect(store.getActions()).to.deep.equal(expectedActions);
     })
  });
});
