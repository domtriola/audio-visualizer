import React from 'react';
import Controls from '../controls';

const Visualizer =
  ({red, green, blue, updateRed, updateGreen, updateBlue}) => (
    <div>
      <label>Red
        <input
          onChange={(e) => updateRed(parseInt(e.target.value))}
          value={red}
        />
      </label>

      <label>Green
        <input
          onChange={(e) => updateGreen(parseInt(e.target.value))}
          value={green}
        />
      </label>

      <label>Blue
        <input
          onChange={(e) => updateBlue(parseInt(e.target.value))}
          value={blue}
        />
      </label>
    </div>
  );

export default Visualizer;
