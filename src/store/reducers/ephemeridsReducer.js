import { GET_EPHEMERIDS } from '../actions/actionTypes';
import { ephemerids } from '../actions/eph.js';

const defaultState = {
  eph: ephemerids,
};

export const ephemeridsReducer = (state = defaultState, { type, payload }) => {
  if (type === GET_EPHEMERIDS)
    return {
      eph: payload.ephemerids,
    };
  else return state;
};
