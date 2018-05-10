import { SET_SEARCH } from '../actions/actionTypes';

export function searchReducer(state, action) {
  if (!state) {
    return {
      currentUserSearch: '',
    };
  }

  if (action.type === SET_SEARCH) {
    return {
      ...state,
      currentUserSearch: action.letters,
    };
  }

  return state;
}
