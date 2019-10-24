import axios from 'axios';
import { GET_PLAYLISTS_SUCCESS, GET_PLAYLISTS_FAIL } from './constants';

// export const getAllPlaylists = token => dispatch => {
//   return axios
//     .get('https://api.spotify.com/v1/me/playlists?limit=50', {
//       headers: { Authorization: 'Bearer ' + token },
//     })
//     .then(payload => {
//       dispatch({ type: GET_PLAYLISTS_SUCCESS, payload });
//     })
//     .catch(err => {
//       dispatch({ type: GET_PLAYLISTS_FAIL, err });
//     });
// };

const fetchPlaylistsRequest = () => ({
  type: 'FETCH_PLAYLISTS_REQUEST',
});

const nextPageCall = (
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
    });
};

export const getAllPlaylists = token => dispatch => {
  nextPageCall(token).then(payload => {
    console.log(payload);
    dispatch({ type: GET_PLAYLISTS_SUCCESS, payload });
  });
};

// const nextPageCall = (
//   token,
//   url = 'https://api.spotify.com/v1/me/playlists?limit=50',
//   playlists = [],
// ) => {
//   return axios
//     .get(url, {
//       headers: { Authorization: 'Bearer ' + token },
//     })
//     .then(payload => {
//       playlists.push(...payload.data.items);
//       console.log(playlists);
//       if (payload.data.next !== null) {
//         return axios
//           .get(payload.data.next, {
//             headers: { Authorization: payload.config.headers.Authorization },
//           })
//           .then(payload => playlists.push(...payload.data.items));
//       } else {
//         console.log(playlists);
//         return playlists;
//       }
//     });
// };
