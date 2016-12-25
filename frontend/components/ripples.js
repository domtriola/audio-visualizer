class Ripples {
  constructor(canvas, ctx, freqByteData) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.freqByteData = freqByteData;
    this.ripples = [];
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

  updateRipples() {
    this.ripples.forEach(function(ring) {
      ring.speed = totalVol(this.freqByteData) / 10000;
      ring.size += ring.speed;
    }.bind(this));
  }
}

class Ripple {
  constructor(canvas, colors) {
    this.pos = [canvas.width / 2, canvas.height / 2];
    this.rgb = 'rgba(' + colors.red + ',' +
                 colors.green + ',' + colors.blue + ', 0.6)';
    this.size = 0;
    this.width = 1;
    this.speed = 1;
  }
}

function totalVol(freqByteData) {
  let volume = 0;
  for (let i = 0; i < freqByteData.length; i++)
    volume += freqByteData[i];
  return volume;
}

export default Ripples;
