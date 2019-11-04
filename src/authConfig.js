import queryStrings from 'query-string';

const routeConfig = {
  client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
<<<<<<< HEAD
<<<<<<< Updated upstream
  redirect_uri: `${process.env.REACT_APP_HOST}/auth`,
=======
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
>>>>>>> Stashed changes
=======
  redirect_uri: `http://localhost:3000/login`,
>>>>>>> 30df226a156b43f28b8d4dea001f64add5e655b2
  response_type: 'token',
  scope:
    'playlist-read-private playlist-read-collaborative user-read-recently-played user-read-private user-read-email',
};

const routeParams = queryStrings.stringify(routeConfig);
export const loginRoute = `https://accounts.spotify.com/authorize?${routeParams}`;
