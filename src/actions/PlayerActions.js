import * as constants from "./constants";

export const setSong = url => ({
  type: constants.SET_SONG,
  url
});
export const playSong = () => ({
  type: constants.PLAY_SONG,
  isPlaying: true
});
export const pauseSong = () => ({
  type: constants.PAUSE_SONG,
  isPlaying: false
});
