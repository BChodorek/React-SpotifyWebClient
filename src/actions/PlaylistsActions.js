import axios from 'axios';
import { GET_PLAYLISTS_SUCCESS, GET_PLAYLISTS_FAIL } from './constants';

const fetchPlaylists = (
  token,
  url = 'https://api.spotify.com/v1/me/playlists?limit=50',
  playlists = [],
) => {
  return axios
    .get(url, {
      headers: { Authorization: 'Bearer ' + token },
    })
    .then(async payload => {
      playlists.push(...payload.data.items);
      if (payload.data.next !== null) {
        await nextPageCall(token, payload.data.next, playlists);
      }
      return playlists;
    })
    .catch(err => err);
};

export const getAllPlaylists = token => dispatch => {
  fetchPlaylists(token).then(payload =>
    dispatch({ type: GET_PLAYLISTS_SUCCESS, payload }).catch(err =>
      dispatch({ type: GET_PLAYLISTS_FAIL, err }),
    ),
  );
};
