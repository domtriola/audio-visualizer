import Util from './utils.js';

class Ripple {
  constructor(canvas, colors) {
    this.pos = [canvas.width / 2, canvas.height / 2];
    let shiftedColors = Util.randomizeColors(colors);
    // console.log(shiftedColors);
    this.rgb = 'rgba(' + shiftedColors.red + ',' +
                         shiftedColors.green + ',' +
                         shiftedColors.blue + ', 0.6)';
    this.size = 0;
    this.width = 1;
    this.speed = 1;
  }
}

export default Ripple;
