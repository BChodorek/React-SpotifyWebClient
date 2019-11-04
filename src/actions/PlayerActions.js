import * as constants from './constants';

export const playSong = url => ({
  type: constants.PLAY_SONG,
  url,
});
