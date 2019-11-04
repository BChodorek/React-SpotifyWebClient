import queryStrings from 'query-string';

const routeConfig = {
  client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
<<<<<<< Updated upstream
  redirect_uri: `${process.env.REACT_APP_HOST}/auth`,
=======
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
>>>>>>> Stashed changes
  response_type: 'token',
};

const routeParams = queryStrings.stringify(routeConfig);
export const loginRoute = `https://accounts.spotify.com/authorize?${routeParams}`;
