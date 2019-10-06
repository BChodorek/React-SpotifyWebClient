import queryStrings from 'query-string';

const routeConfig = {
  client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  redirect_uri: 'http://localhost:3000/auth',
  response_type: 'token',
};
const routeParams = queryStrings.stringify(routeConfig);
export const loginRoute = `https://accounts.spotify.com/authorize?${routeParams}`;
