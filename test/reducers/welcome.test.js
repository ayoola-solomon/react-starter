import expect from 'expect';
import reducer from '../../shared/reducers/welcome';
import * as types from '../../shared/constants/actionTypes';


describe('welcome reducer', () => {
  it('should return an initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      text: null
    });
  });

  it('should handle WELCOME', () => {
    expect(
      reducer(
        { text: null },
        { type: types.WELCOME }
      )
    )
    .toEqual(
      { text: 'Welcome to React Redux Isomorphic Starter' }
    );
  });
});
