import * as constants from './constants';

export const playSong = song => ({
  type: constants.PLAY_SONG,
  song,
});
