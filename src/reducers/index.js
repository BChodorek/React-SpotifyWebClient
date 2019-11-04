import {
  SET_TOKEN,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_PLAYLISTS_SUCCESS,
  GET_PLAYLISTS_FAIL,
  GET_RECENT_SUCCESS,
  GET_RECENT_FAIL,
  PLAY_SONG,
} from '../actions/constants';

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case GET_USER_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        userName: data.display_name,
        userImg: data.images[0] ? data.images[0].url : null,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        err: action.err,
      };
    case GET_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: action.payload,
      };
    case GET_PLAYLISTS_FAIL:
      return {
        ...state,
        err: action.err,
      };
    case GET_RECENT_SUCCESS:
      return {
        ...state,
        recentTracks: [...action.payload.data.items],
      };
    case GET_RECENT_FAIL:
      return {
        ...state,
        err: action.err,
      };
    case PLAY_SONG:
      return {
        ...state,
        songName: action.song,
        songId: action.song.track.id,
        isPlaying: true,
      };
    default:
      return state;
  }
};

export default rootReducer;
