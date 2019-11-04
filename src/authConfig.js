import queryStrings from 'query-string';

const routeConfig = {
  client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  response_type: 'token',
  scope:
    'playlist-read-private playlist-read-collaborative user-read-recently-played user-read-private user-read-email',
};

const routeParams = queryStrings.stringify(routeConfig);
export const loginRoute = `https://accounts.spotify.com/authorize?${routeParams}`;
