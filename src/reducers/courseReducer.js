import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function courseReducer(state = initialState, action){
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS: {
      return action.courses;
    }

    default:
      return state;
  }
}
