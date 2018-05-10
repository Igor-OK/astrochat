import { SET_CHAT_INFO, CLEAR_CHAT_INFO } from './actionTypes';
import api from '../../api';

export const setChatInfo = payload => {
  return {
    payload,
    type: SET_CHAT_INFO,
  };
};

export const clearChatInfo = () => {
  return {
    type: CLEAR_CHAT_INFO,
  };
};

export const fetchChat = roomId => async (dispatch, getState) => {
  const room = await api.getRoom(roomId);
  const curUser = await api.getCurrentUser();
  let req = room.users[0] === curUser._id ? room.users[1] : room.users[0];
  let chatUser = await api.getUser(req);
  if (room) {
    dispatch(setChatInfo({ title: chatUser.name, subtitle: `${room.users.length} members` }));
  }
};

export const clearChat = () => dispatch => {
  dispatch(clearChatInfo());
};
