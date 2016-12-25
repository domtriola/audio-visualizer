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
      let red = action.red > 255 ? 255 : action.red;
      nextState.red = red ? red : 0;
      return nextState;
    case UPDATE_GREEN:
      let green = action.green > 255 ? 255 : action.green;
      nextState.green = green ? green : 0;
      return nextState;
    case UPDATE_BLUE:
      let blue = action.blue > 255 ? 255 : action.blue;
      nextState.blue = blue ? blue : 0;
      return nextState;
    case RESET:
      return _defaultState;
    default:
      return state;
  }
};

export default reducer;
