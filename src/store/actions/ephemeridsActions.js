import { GET_EPHEMERIDS } from './actionTypes';
// import api from '../../api';

export const ephemeridsAction = payload => {
  return {
    payload,
    type: GET_EPHEMERIDS,
  };
};

export function getEphemerids() {
  return async function(dispatch, getState) {
    let param = './eph-for-ya.json';
    let response = await fetch(param);
    let json = await response.json();
    dispatch(
      ephemeridsAction({
        ephemerids: json,
      }),
    );
  };
}
