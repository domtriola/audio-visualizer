import Util from './utils';
import Ripple from './ripple';

class Ripples {
  constructor(canvas, ctx, freqByteData) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.freqByteData = freqByteData;
    this.ripples = [];
    this.prevVol = 0;
    this.colorShift = { red: null, green: null, blue: null,
                        dir: [['green', 'blue', 'red'], -1] };
  }

  draw({ red, green, blue }) {
    const colors = { red, green, blue };
    this.colorShift = Util.shiftColors(this.colorShift, colors);
    this.genRipple(this.colorShift);

    this.ripples.forEach(function(ripple, i) {
      this.ctx.strokeStyle = ripple.rgb;
      this.ctx.lineWidth = 6;
      this.ctx.beginPath();
      this.ctx.arc(ripple.pos[0], ripple.pos[1],
                   ripple.size, 0, 2 * Math.PI);
      this.ctx.stroke();

      ripple.size += ripple.speed;
    }.bind(this));
  }

  genRipple({ red, green, blue }) {
    const colors = { red, green, blue };
    let vol = Util.totalVol(this.freqByteData);
    this.ripples.push(new Ripple(this.canvas, colors, vol));
    if (this.ripples.length > 100)
      this.ripples.shift();
  }
}

export default Ripples;
