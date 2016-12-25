import merge from 'lodash/merge';
import { UPDATE_RED, UPDATE_GREEN, UPDATE_BLUE, RESET } from "./actions";

const _defaultState = {
  red: 100,
  green: 200,
  blue: 250
};

const reducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const nextState = merge({}, state);

  switch(action.type) {
    case UPDATE_RED:
      nextState.red = action.red;
      return nextState;
    case UPDATE_GREEN:
      nextState.green = action.green;
      return nextState;
    case UPDATE_BLUE:
      nextState.blue = action.blue;
      return nextState;
    case RESET:
      return _defaultState;
    default:
      return state;
  }
};

export default reducer;
