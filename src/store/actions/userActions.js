import { USER_SET } from './actionTypes';

export const setUser = user => ({
  type: USER_SET,
  user,
});
