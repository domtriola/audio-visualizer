import Util from './utils';
import Ripple from './ripple';

class Ripples {
  constructor(canvas, ctx, freqByteData) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.freqByteData = freqByteData;
    this.ripples = [];
    this.prevVol = 0;
    // this.toShift = { red: -1 };
  }

  draw(colors) {
    this.genRipple(colors);
    this.updateRipples();

    this.ripples.forEach(function(ripple, i) {
      this.ctx.strokeStyle = ripple.rgb;
      this.ctx.lineWidth = 6;
      this.ctx.beginPath();
      ripple.size += ripple.speed;
      this.ctx.arc(ripple.pos[0], ripple.pos[1],
                   ripple.size, 0, 2 * Math.PI);
      this.ctx.stroke();
    }.bind(this));
  }

  genRipple(colors) {
    this.ripples.push(new Ripple(this.canvas, colors));
    if (this.ripples.length > 100)
      this.ripples.shift();
  }

  updateRipples() {
    this.ripples.forEach(ring => {
      let vol = Util.totalVol(this.freqByteData);
      if (vol > this.prevVol) {
        ring.speed = vol / 4000;
      } else
        ring.speed = vol / 40000;

      ring.size += ring.speed;
      this.prevVol = vol;
    });
  }
}

export default Ripples;
