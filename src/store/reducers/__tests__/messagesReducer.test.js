import { messagesReducer } from '../messagesReducer';
import { MESSAGES_APPENDED, MESSAGES_SET } from '../../actions/actionTypes';

describe('Redux: Messages Reducer', () => {
  it('should return initial state with given an empty action', () => {
    expect(messagesReducer(undefined, {})).toEqual({});
  });
  it('should handle MESSAGES_SET action', () => {
    const roomId = '123';
    const next = null;
    const messages = [
      {
        id: '123',
        text: 'Test Test',
        isMy: false,
        time: '2018-04-14',
      },
      {
        id: '1234',
        text: 'Test Test',
        isMy: false,
        time: '2018-04-14',
      },
    ];
    const messageAction = {
      type: MESSAGES_SET,
      payload: {
        roomId,
        next,
        messages,
      },
    };
    expect(messagesReducer({}, messageAction)).toEqual({ [roomId]: { next, messages } });
  });
  it('should handle MESSAGES_APPENDED action', () => {
    const roomId = '321';
    const messages = [
      {
        id: '123',
        text: 'Test Test',
        isMy: false,
        time: '2018-04-14',
      },
      {
        id: '1234',
        text: 'Test Test',
        isMy: false,
        time: '2018-04-14',
      },
    ];
    const messageAction = {
      type: MESSAGES_APPENDED,
      payload: {
        roomId,
        messages,
      },
    };
    expect(messagesReducer({}, messageAction)).toEqual({ [roomId]: { next: null, messages } });
  });
  it('MESSAGES_APPENDED action should not overwrite existing messages, if there is any', () => {
    const roomId = '321';
    const next = null;
    const initMessages = [
      {
        id: '1',
        text: 'Init Test',
        isMy: false,
        time: '2018-04-14',
      },
      {
        id: '2',
        text: 'Init Test',
        isMy: false,
        time: '2018-04-14',
      },
    ];
    const messages = [
      {
        id: '123',
        text: 'Test Test',
        isMy: false,
        time: '2018-04-14',
      },
      {
        id: '1234',
        text: 'Test Test',
        isMy: false,
        time: '2018-04-14',
      },
    ];
    const messageAction = {
      type: MESSAGES_APPENDED,
      payload: {
        roomId,
        next,
        messages,
      },
    };
    expect(messagesReducer({ [roomId]: { messages: initMessages, next: null } }, messageAction)).toEqual({
      [roomId]: { next, messages: [...initMessages, ...messages] },
    });
  });
});
