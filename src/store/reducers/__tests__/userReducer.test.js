import { userReducer } from '../userReducer';
import { USER_SET } from '../../actions/actionTypes';

describe('Redux: User Reducer', () => {
  it('should return initial state with given an empty action', () => {
    expect(userReducer(undefined, {})).toEqual({});
  });
  it('should handle USER_SET action', () => {
    const user = {
      _id: '123',
      name: 'Test Test',
      email: 'test@redux.com',
      phone: '533-802-3815',
    };
    const userAction = {
      type: USER_SET,
      user,
    };
    expect(userReducer({}, userAction)).toEqual(user);
  });
});
