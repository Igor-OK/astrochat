import { MESSAGES_SET, MESSAGES_APPENDED } from '../actions/actionTypes';

export const messagesReducer = (state = {}, action) => {
  switch (action.type) {
    case MESSAGES_SET:
      return {
        ...state,
        [action.payload.roomId]: {
          messages: [...action.payload.messages],
          next: action.payload.next,
        },
      };
    case MESSAGES_APPENDED:
      if (state[action.payload.roomId] && state[action.payload.roomId].messages.length > 0) {
        return {
          ...state,
          [action.payload.roomId]: {
            ...state[action.payload.roomId],
            messages: [...state[action.payload.roomId].messages, ...action.payload.messages],
            next: action.payload.next,
          },
        };
      }
      return {
        ...state,
        [action.payload.roomId]: {
          messages: [...action.payload.messages],
          next: null,
        },
      };
    default:
      return state;
  }
};
