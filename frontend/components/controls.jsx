import React from 'react';

const Controls =
  ({red, green, blue, updateRed, updateGreen, updateBlue}) => (
    <div>
      <label>Red
        <input
          type="text"
          onChange={(e) => updateRed(parseInt(e.target.value))}
          value={red}
        />
      </label>

      <label>Green
        <input
          type="text"
          onChange={(e) => updateGreen(parseInt(e.target.value))}
          value={green}
        />
      </label>

      <label>Blue
        <input
          type="text"
          onChange={(e) => updateBlue(parseInt(e.target.value))}
          value={blue}
        />
      </label>
    </div>
  );

export default Controls;
