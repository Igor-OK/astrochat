import { SET_CHAT_INFO, CLEAR_CHAT_INFO } from '../actions/actionTypes';

const defaultState = {
  title: '',
  subtitle: '',
};

export const chatReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_CHAT_INFO:
      return {
        title: payload.title,
        subtitle: payload.subtitle,
      };

    case CLEAR_CHAT_INFO:
      return { ...defaultState };

    default:
      return state;
  }
};
