import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import Visualizer from './components/visualizer.jsx';
import ControlsContainer from './components/controls_container.js';

// TODO debugging
window.store = store;

if (window.location.pathname === "/visualizers/") {
  document.addEventListener("DOMContentLoaded", () => {
    // Setup Canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 300;
    canvas.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    document.body.appendChild(canvas);

    // Setup Audio
    const audio = document.createElement('audio');
    audio.style.width = 300 + 'px';
    audio.src = '/assets/Tours_-_01_-_Enthusiast.mp3';
    audio.controls = 'true';
    document.body.appendChild(audio);

    // Setup Audio Analyser
    const audioContext = new AudioContext();
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

  	ReactDOM.render(
  		<App />,
  		document.getElementById('root')
  	);
  });

  // document.addEventListener("DOMContentLoaded", () => {
  //   // Setup Canvas
  //   const canvas = document.createElement('canvas');
  //   const ctx = canvas.getContext('2d');
  //   canvas.width = 600;
  //   canvas.height = 300;
  //   canvas.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  //   document.body.appendChild(canvas);
  //
  //   // Setup Audio
  //   const audio = document.createElement('audio');
  //   audio.style.width = 300 + 'px';
  //   audio.src = '/assets/Tours_-_01_-_Enthusiast.mp3';
  //   audio.controls = 'true';
  //   document.body.appendChild(audio);
  //
  //   // Setup Audio Analyser
  //   const audioContext = new AudioContext();
  //   const analyser = audioContext.createAnalyser();
  //   const source = audioContext.createMediaElementSource(audio);
  //   source.connect(analyser);
  //   analyser.connect(audioContext.destination);
  //
  //   // Render Visualizer Controls
  // 	const container = document.getElementById("container");
  // 	ReactDOM.render(
  //     <Visualizer
  //       canvas={canvas}
  //       ctx={ctx}
  //       analyser={analyser}
  //     />, container);
  // });
}
