import { SET_TOKEN } from './constants';

export const setToken = token => {
  window.location.hash = '';
  return {
    type: SET_TOKEN,
    token,
  };
};
