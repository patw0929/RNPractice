const LOAD = 'patw/albums/LOAD';
const LOAD_SUCCESS = 'patw/albums/LOAD_SUCCESS';
const LOAD_FAIL = 'patw/albums/LOAD_FAIL';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case LOAD_SUCCESS: {
      return {
        ...state,
        items: action.result.items,
        isFetching: false,
      };
    }
    case LOAD_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('http://rallycoding.herokuapp.com/api/music_albums'),
  };
}
