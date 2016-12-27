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
};

export default Util;
