import React from 'react';
import Controls from './controls';

class Visualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      freqByteData: new Uint8Array(this.props.analyser.frequencyBinCount)
    };

    this.draw();
  }

  draw() {
    this.props.analyser.getByteFrequencyData(this.state.freqByteData);
    this.props.ctx.clearRect(0, 0, 600, 300);

    this.equalizerBar();

    requestAnimationFrame(this.draw.bind(this));
  }

  equalizerBar() {
    const canvasHeight = this.props.canvas.height;
    const freqByteData = this.state.freqByteData;
    let barWidth = this.props.canvas.width /
                   this.state.freqByteData.length * 8;

    for (var i = 1; i < freqByteData.length; i += barWidth) {
      var red = 100, green = 200, blue = 250;

      this.props.ctx.lineWidth = 1;
      this.props.ctx.strokeStyle = '#000000';
      this.props.ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';

      this.props.ctx.fillRect(i,
        canvasHeight - freqByteData[Math.floor(i)],
        barWidth, canvasHeight);
      this.props.ctx.strokeRect(i,
        canvasHeight - freqByteData[Math.floor(i)],
        barWidth, canvasHeight);
    }
  }

  render() {
    return (
      <div>
        <Controls />
      </div>
    );
  }
}

export default Visualizer;
