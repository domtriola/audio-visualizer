import React from 'react';
import ReactDOM from 'react-dom';
import Visualizer from './visualizer.jsx';

document.addEventListener("DOMContentLoaded", () => {
	const container = document.getElementById("container");
	ReactDOM.render(<Visualizer />, container);
});
