import axios from 'axios';
import { GET_USER_SUCCESS, GET_USER_FAIL } from './constants';

export const getUser = token => dispatch => {
  return axios
    .get('https://api.spotify.com/v1/me', {
      headers: { Authorization: 'Bearer ' + token },
    })
    .then(payload => {
      dispatch({ type: GET_USER_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: GET_USER_FAIL, err });
    });
};
