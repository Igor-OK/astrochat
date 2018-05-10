import { USER_SET } from '../actions/actionTypes';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SET:
      return {
        ...action.user,
      };
    default:
      return state;
  }
};
