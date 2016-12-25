export const UPDATE_RED = "UPDATE_RED";
export const UPDATE_GREEN = "UPDATE_GREEN";
export const UPDATE_BLUE = "UPDATE_BLUE";
export const SET_CURRENT_PRESET = "SET_CURRENT_PRESET";
export const CREATE_NEW_PRESET = "CREATE_NEW_PRESET";
export const RESET = "RESET";

export const updateRed = (amt) => ({
  type: UPDATE_RED,
  red: amt
});

export const updateGreen = (amt) => ({
  type: UPDATE_GREEN,
  green: amt
});

export const updateBlue = (amt) => ({
  type: UPDATE_BLUE,
  blue: amt
});

export const setCurrentPreset = (presetName) => ({
  type: SET_CURRENT_PRESET,
  presetName
});

export const createNewPreset = (newPresetData) => ({
  type: CREATE_NEW_PRESET,
  newPresetData
});

export const reset = () => ({
  type: RESET
});
