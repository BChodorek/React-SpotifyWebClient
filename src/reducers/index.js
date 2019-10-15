import {
  SET_TOKEN,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_PLAYLISTS_SUCCESS,
  GET_PLAYLISTS_FAIL,
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
        playlists: action.payload.data.items,
      };
    case GET_PLAYLISTS_FAIL:
      return {
        ...state,
        err: action.err,
      };
    default:
      return state;
  }
};

export default rootReducer;
