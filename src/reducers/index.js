import {
  SET_TOKEN,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_PLAYLISTS_SUCCESS,
  GET_PLAYLISTS_FAIL,
  GET_RECENT_SUCCESS,
  GET_RECENT_FAIL,
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
      return {
        ...state,
        userName: action.payload.data.display_name,
        userImg: action.payload.data.images[0].url,
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
    default:
      return state;
  }
};

export default rootReducer;
