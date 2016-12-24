export const UPDATE_RED = "UPDATE_RED";
export const UPDATE_GREEN = "UPDATE_GREEN";
export const UPDATE_BLUE = "UPDATE_BLUE";
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

export const reset = () => ({
  type: RESET
});
