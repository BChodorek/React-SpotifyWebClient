import axios from 'axios';
import { GET_PLAYLISTS_SUCCESS, GET_PLAYLISTS_FAIL } from './constants';

export const getAllPlaylists = token => dispatch => {
  return axios
    .get('https://api.spotify.com/v1/me/playlists', {
      headers: { Authorization: 'Bearer ' + token },
    })
    .then(payload => {
      dispatch({ type: GET_PLAYLISTS_SUCCESS, payload });
    })
    .catch(err => {
      dispatch({ type: GET_PLAYLISTS_FAIL, err });
    });
};
