import merge from 'lodash/merge';

const Util = {
  totalVol: (freqByteData) => {
    let volume = 0;
    for (let i = 0; i < freqByteData.length; i++)
      volume += freqByteData[i];
    return volume;
  },

  randomizeColors: (colors) => {
    const shiftedColors = merge({}, colors);
    for (let color in shiftedColors) {
      if (shiftedColors.hasOwnProperty(color)) {
        let newColor = shiftedColors[color];
        let shift = Math.floor(Math.random() * 100);
        if (Math.floor(Math.random() * 2)) shift *= -1;

        newColor += shift;
        if (newColor > 255 || newColor < 0) {
          newColor = newColor > 255 ? 255 : newColor;
          newColor = newColor < 0 ? 0 : newColor;
        }

        shiftedColors[color] = newColor;
      }
    }

    return shiftedColors;
  },
  //
  // shiftColors: (colors, toShift) => {
  //   const shiftedColors = merge({}, colors);
  //
  //   let color = Object.keys(toShift[0]);
  //   if (toShift[color] === 1 && shiftedColors[color] < colors[color])
  //     colors
  //
  //   return { color: shiftDir };
  // }
  // if (mainColor[shiftI] > 230 || mainColor[shiftI] < 20) {
  //   shiftI = (shiftI + 1) % 3;
  //   shiftDir = mainColor[shiftI] > 230 ? -1 : 1;
  // }
  //
  // mainColor[shiftI] += shiftDir * Math.min(20, Math.floor(vol / 5000));
};

export default Util;
