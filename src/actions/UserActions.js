import axios from 'axios';
import { GET_USER_SUCCESS, GET_USER_FAIL } from './constants';
import { loginRoute } from '../authConfig';

axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
      window.location.href = loginRoute;
    }
    return Promise.reject(error);
  },
);

export const getUser = token => dispatch => {
  return axios
    .get('https://api.spotify.com/v1/me', {
      headers: { Authorization: 'Bearer ' + token },
    })
    .then(payload => {
      dispatch({ type: GET_USER_SUCCESS, payload });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_USER_FAIL, err });
    });
};
