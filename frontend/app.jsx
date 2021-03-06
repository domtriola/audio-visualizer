import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Visualizer from './components/visualizer.jsx';
import ControlsContainer from './components/controls_container.js';

window.store = store;

if (window.location.pathname === "/" ||
    window.location.pathname === "/visualizers" ||
    window.location.pathname === "/visualizers/") {

  document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement('div');
    container.id = "visualizer";
    container.className = "col col-2-3";
    document.getElementById("main").appendChild(container);

    // Setup Canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 400;
    canvas.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    container.appendChild(canvas);

    // Setup Audio
    const audio = document.createElement('audio');
    const playInstructions = document.createElement('div');
    playInstructions.id = "play-instructions";
    playInstructions.innerHTML = "Press play to begin";
    container.append(playInstructions);
    audio.style.width = 600 + 'px';
    audio.src = '/assets/Tours_-_01_-_Enthusiast.mp3';
    audio.controls = 'true';
    audio.addEventListener("play", () => {
      let instructions = document.getElementById('play-instructions');
      if (instructions)
        instructions.parentNode.removeChild(instructions);
    });
    container.appendChild(audio);

    // Setup Audio Analyser
    const audioContext = new AudioContext();
    audio.addEventListener('play', () => {
      audioContext.resume().then(() => {
        console.log('Playback resumed successfully')
      });
    });
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    const App = () => (
      <Provider store={store}>
        <div>
          <Visualizer store={store}
                      canvas={canvas}
                      ctx={ctx}
                      analyser={analyser}/>
          <ControlsContainer />
        </div>
      </Provider>
    );

  	ReactDOM.render(<App />, document.getElementById('root'));
  });
}
