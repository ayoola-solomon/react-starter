import expect from 'expect'
import * as actions from '../../shared/actions/welcome';
import * as types from '../../shared/constants/ActionTypes';

describe('actions', () => {
  it('should create an action to update the welcome text', () => {
    const expectedAction = {
      type: types.WELCOME
    }
    expect(actions.setWelcomeText()).toEqual(expectedAction);
  });
});
