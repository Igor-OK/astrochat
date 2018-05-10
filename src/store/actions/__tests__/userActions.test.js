import { setUser } from '../userActions';
import { USER_SET } from '../actionTypes';

describe('Redux: User Actions', () => {
  it('should create an action to set a user', () => {
    const user = {
      _id: '123',
      name: 'Test Test',
      email: 'test@redux.com',
      phone: '533-802-3815',
    };

    const expectedAction = {
      type: USER_SET,
      user,
    };

    expect(setUser(user)).toEqual(expectedAction);
  });
});
