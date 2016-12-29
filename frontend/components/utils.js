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

  shiftColors: (colorShift, colors, dVol) => {
    let shiftedColors = merge({}, colorShift);
    Object.keys(shiftedColors).forEach(key => {
      if (shiftedColors[key] === null)
        shiftedColors[key] = colors[key];
    });

    let shiftColors = shiftedColors.dir[0].slice(0);
    let shiftColor = shiftColors[0];
    let shiftDir = shiftedColors.dir[1];

    let colorAmnt = shiftedColors[shiftColor];
    if (colorAmnt <= colors[shiftColor] && colorAmnt >= 0) {
      let delta = dVol > 0 ? 8 : 1;
      shiftedColors[shiftColor] += delta * shiftDir;
    } else {
      shiftedColors[shiftColor] = colorAmnt <= 0 ? 1 : colors[shiftColor] - 1;
      shiftDir = shiftDir === 1 ? -1 : 1;
      let rotate = shiftColors.shift();
      shiftColors.push(rotate);
    }

    return { red: shiftedColors.red,
             green: shiftedColors.green,
             blue: shiftedColors.blue,
             dir: [shiftColors, shiftDir] };
  }
};

export default Util;
