import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

const loadFromStorage = () => {
  try {
    const localToken = localStorage.getItem('token');
    if (localToken === null || undefined) {
      return undefined;
    }
    return JSON.parse(localToken);
  } catch (err) {
    return undefined;
  }
};

const saveToStorage = token => {
  try {
    const localToken = JSON.stringify(token);
    localStorage.setItem('token', localToken);
  } catch (err) {
    console.log(err);
  }
};
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromStorage();
const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));
/* eslint-enable */

store.subscribe(() => {
  saveToStorage({ token: store.getState().token });
});

export default store;
