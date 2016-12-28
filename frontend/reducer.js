import merge from 'lodash/merge';
import { UPDATE_RED, UPDATE_GREEN, UPDATE_BLUE,
         RESET, SET_CURRENT_PRESET, CREATE_NEW_PRESET,
         SET_CURRENT_EFFECT } from "./actions";

const _defaultState = {
  red: 100,
  green: 200,
  blue: 20,
  effect: "Equalizer",
  presets: {}
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
    case "SET_PRESETS":
      nextState.presets = action.res;
      return nextState;
    case SET_CURRENT_PRESET:
      const preset = nextState.presets[action.presetName];
      nextState.red = preset.red;
      nextState.blue = preset.blue;
      nextState.green = preset.green;
      return nextState;
    case CREATE_NEW_PRESET:
      nextState.presets[action.newPresetData.name] = (action.newPresetData);
      return nextState;
    case SET_CURRENT_EFFECT:
      nextState.effect = action.effectName;
      return nextState;
    case RESET:
      return _defaultState;
    default:
      return state;
  }
};

export default reducer;
