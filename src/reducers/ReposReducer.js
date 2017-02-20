import {
  GET_USER,
  GET_USER_FAILED,
  SORT_BY_STARS,
  SET_USER
  } from '../actions/constants';

const initialState = {
  error: '',
  repos: [],
  username: ''
};

// Only display repos that were not forked
const filterForks = (repo) => repo.fork === false;

// Helper to sort repos by the highest amount of stars
const sortHighestStars = (a,b) => b.stargazers_count - a.stargazers_count;

export default function(state, action) {
  switch (action.type) {
  case GET_USER:
    return Object.assign({}, state, {
      repos: action.payload.filter(filterForks),
      error: ''
    });

  case GET_USER_FAILED:
    return Object.assign({}, state, {
      error: action.error
    });

  case SORT_BY_STARS:
    return Object.assign({}, state, {
      repos: state.repos.sort(sortHighestStars)
    });

  case SET_USER:
    return Object.assign({}, state, {
      username: action.payload
    });

    return state;
  }
  return initialState;
}
