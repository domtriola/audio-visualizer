import Util from './utils.js';

class Ripple {
  constructor(canvas, colors, vol) {
    this.pos = [canvas.width / 2, canvas.height / 2];
    this.rgb = 'rgba(' + colors.red + ',' +
                         colors.green + ',' +
                         colors.blue + ', 0.6)';
    this.size = 0;
    this.width = 1;
    this.speed = vol / 40000;
  }
}

export default Ripple;
