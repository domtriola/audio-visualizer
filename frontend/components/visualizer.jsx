import React from 'react';
import { equalizerBar } from './equalizerBar.js';
import Ripples from './ripples.js';

class Visualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      freqByteData: new Uint8Array(this.props.analyser.frequencyBinCount)
    };

    this.ripples = new Ripples(this.props.canvas, this.props.ctx,
                               this.state.freqByteData);
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
    this.settings = this.props.store.getState();
    this.props.analyser.getByteFrequencyData(this.state.freqByteData);
    this.props.ctx.clearRect(0, 0, 600, 400);

    switch(this.settings.effect) {
      case "Equalizer":
        equalizerBar(this.props.canvas, this.props.ctx,
                     this.state.freqByteData, this.settings);
        break;
      case "Ripples":
        this.ripples.draw(this.settings);
        break;
    }

    requestAnimationFrame(this.draw.bind(this));
  }

  render() {
    return (
      <div>
        <h3>Settings</h3>
      </div>
    );
  }
}

export default Visualizer;
