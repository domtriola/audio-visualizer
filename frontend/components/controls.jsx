import React from 'react';

const Controls =
  ({red, green, blue, updateRed, updateGreen, updateBlue,
    presets, setCurrentPreset, createNewPreset}) => (
    <div>
      <label>Red
        <input
          id="setting-red"
          type="text"
          onChange={(e) => updateRed(parseInt(e.target.value))}
          value={red}
        />
      </label>

      <label>Green
        <input
          id="setting-green"
          type="text"
          onChange={(e) => updateGreen(parseInt(e.target.value))}
          value={green}
        />
      </label>

      <label>Blue
        <input
          id="setting-blue"
          type="text"
          onChange={(e) => updateBlue(parseInt(e.target.value))}
          value={blue}
        />
      </label>

      <label>Preset
        <select>
            <option name=""> --select one-- </option>
            {presets.map((preset, i) => (
              <option key={i} name={preset.name}>{preset.name}</option>
            ))}
        </select>
      </label>

      <label>New Preset
        <input id="new-preset" type="text" />
      </label>
      <button onClick={() => {
          let newPreset = document.getElementById("new-preset");
          let redSetting = document.getElementById("setting-red");
          let greenSetting = document.getElementById("setting-green");
          let blueSetting = document.getElementById("setting-blue");
          console.log(newPreset.value);
          console.log(redSetting.value);
          console.log(greenSetting.value);
          console.log(blueSetting.value);
        }}>Save</button>
    </div>
  );

export default Controls;
