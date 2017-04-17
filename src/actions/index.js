import axios from 'axios';
import {
  GET_USER,
  GET_USER_FAILED,
  SORT_BY_STARS,
  SET_USER } from './constants';

export function sortByStars() {
  return {
    type: SORT_BY_STARS
  };
}

const userFetchFailed = (error) => ({
  type: GET_USER_FAILED,
  error
});

const getUserRepos = (data) => ({
  type: GET_USER,
  payload: data
});

const setUsername = (username) => ({
  type: SET_USER,
  payload: username
});

export function searchUser(username) {
  const url = `https://api.github.com/users/${username}/repos`;
  const request = axios.get(url);

  return (dispatch) => {
    request
    .then(({ data }) => {
      dispatch(getUserRepos(data))
    })
    .catch(error => dispatch(userFetchFailed(error)))
    .then(res => dispatch(setUsername(username)))
  };
}
