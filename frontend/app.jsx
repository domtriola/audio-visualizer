import React from 'react';
import ReactDOM from 'react-dom';
import Visualizer from './visualizer.jsx';

document.addEventListener("DOMContentLoaded", () => {
  // Setup Canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 300;
  canvas.height = 300;
  canvas.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  document.body.appendChild(canvas);

  // Setup Audio
  const audio = document.createElement('audio');
  audio.style.width = 300 + 'px';
  audio.src = '/assets/Tours_-_01_-_Enthusiast.mp3';
  audio.controls = 'true';
  document.body.appendChild(audio);

  // Setup Audio Analyzer
  const audioContext = new AudioContext();
  const analyser = audioContext.createAnalyser();
  const source = audioContext.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioContext.destination);

  // Render Visualizer Controls
	const container = document.getElementById("container");
	ReactDOM.render(<Visualizer ctx={ctx} />, container);
});
