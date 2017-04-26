import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import ApiClient from '../helpers/ApiClient';
import createMiddleware from '../redux/middleware/clientMiddleware';
import reducer from '../redux/modules/reducer';

const client = new ApiClient();

const middlewares = [createMiddleware(client)];

let enhancer;

if (__DEV__) {
  const composeEnhancers = composeWithDevTools({
    realtime: true,
    port: 5678,
  });

  enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
  );
} else {
  enhancer = applyMiddleware(...middlewares);
}

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('../redux/modules/reducer').default); // eslint-disable-line global-require
    });
  }

  if (__DEV__) {
    window.store = store;
    window.reducer = reducer;
  }

  return store;
}
