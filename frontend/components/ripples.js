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
      this.ctx.arc(ripple.pos[0], ripple.pos[1], ripple.size, 0, 2 * Math.PI);
      this.ctx.stroke();
    }.bind(this));
  }

  genRipple(colors) {
    this.ripples.push(new Ripple(this.canvas, colors));
    if (this.ripples.length > 70)
      this.ripples.shift();
  }

  // updateRipples() {
  //   this.ripples.forEach(ring => {
  //     ring.speed = Util.totalVol(this.freqByteData) / 10000;
  //     ring.size += ring.speed;
  //   });
  // }

  updateRipples() {
    this.ripples.forEach(ring => {
      let vol = Util.totalVol(this.freqByteData);
      if (vol > this.prevVol) {
        ring.speed = vol / 12000;
      } else
        ring.speed = vol / 20000;

      ring.size += ring.speed;
      this.prevVol = vol;
    });
  }
}

export default Ripples;
