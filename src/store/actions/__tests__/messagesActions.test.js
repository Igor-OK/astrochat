import { setMessages, appendMessages } from '../messagesActions';
import { MESSAGES_SET, MESSAGES_APPENDED } from '../actionTypes';

describe('Redux: Messages Actions', () => {
  it('should create an action to set messages', () => {
    const roomId = 'testRoom1';
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

    const expectedAction = {
      type: MESSAGES_SET,
      payload: {
        roomId,
        messages,
        next,
      },
    };

    expect(setMessages({ roomId, next, messages })).toEqual(expectedAction);
  });
  it('should create an action to append messages', () => {
    const roomId = 'testRoom1';
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

    const expectedAction = {
      type: MESSAGES_APPENDED,
      payload: {
        roomId,
        messages,
        next,
      },
    };

    expect(appendMessages({ roomId, next, messages })).toEqual(expectedAction);
  });
});
