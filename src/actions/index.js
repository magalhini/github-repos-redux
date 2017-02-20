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

export function searchUser(username) {
  const url = `https://api.github.com/users/${username}/repos`;
  const request = axios.get(url);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({
        type: GET_USER,
        payload: data
      })
    }).catch(error => dispatch({
      type: GET_USER_FAILED,
      error
    })).then(res => dispatch({
      type: SET_USER,
      payload: username
    }))
  };
}
