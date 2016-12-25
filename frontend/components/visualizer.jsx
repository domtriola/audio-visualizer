import React from 'react';
import { equalizerBar } from './equalizerBar.js';

class Visualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      freqByteData: new Uint8Array(this.props.analyser.frequencyBinCount)
    };

    this.fetchPresets();
    this.draw();
  }

  fetchPresets() {
    $.ajax({
      url: "http://localhost:3000/presets/",
      type: "GET",
      dataType: "JSON",
      success: function(res) {
        this.props.store.dispatch({type:"SET_PRESETS", res});
      }.bind(this)
    });
  }

  draw() {
    this.colors = this.props.store.getState();
    this.props.analyser.getByteFrequencyData(this.state.freqByteData);
    this.props.ctx.clearRect(0, 0, 600, 300);

    // TODO: add logic to switch between visualizers
    equalizerBar(this.props.canvas, this.props.ctx,
                 this.state.freqByteData, this.colors);

    requestAnimationFrame(this.draw.bind(this));
  }

  render() {
    return (
      <div>
        <h3>Now playing...</h3>
      </div>
    );
  }
}

export default Visualizer;
