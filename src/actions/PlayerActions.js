import * as constants from './constants';

export const playSong = (url, isPlaying) => ({
  type: constants.PLAY_SONG,
  url,
  isPlaying,
});
export const pauseSong = (url, isPlaying) => ({
  type: constants.PAUSE_SONG,
  url,
  isPlaying,
});
