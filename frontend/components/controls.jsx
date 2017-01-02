import React from 'react';

const Controls =
  ({red, green, blue, updateRed, updateGreen, updateBlue, effect,
    presets, setCurrentPreset, createNewPreset, setCurrentEffect}) => (
    <div id="controls">
      <label>Preset<br />
        <select onChange={(e) => setCurrentPreset(e.target.value)}>
          <option name=""> --select one-- </option>
          {Object.keys(presets).map((preset, i) => (
            <option key={i} name={preset}>{preset}</option>
          ))}
        </select>
      </label>

      <label>Effect<br />
        <select id="setting-effect"
          onChange={(e) => setCurrentEffect(e.target.value)}
          value={effect}>
            <option>Equalizer</option>
            <option>Ripples</option>
        </select>
      </label>

      <label>Red
        <input
          id="setting-red"
          type="range"
          min="0"
          max="255"
          onChange={(e) => updateRed(parseInt(e.target.value))}
          value={red}
        />
      </label>

      <label>Green
        <input
          id="setting-green"
          type="range"
          min="0"
          max="255"
          onChange={(e) => updateGreen(parseInt(e.target.value))}
          value={green}
        />
      </label>

      <label>Blue
        <input
          id="setting-blue"
          type="range"
          min="0"
          max="255"
          onChange={(e) => updateBlue(parseInt(e.target.value))}
          value={blue}
        />
      </label>

      <label>New Preset
        <input id="new-preset" type="text" />
      </label>
      <button onClick={() => {
          let presetName = document.getElementById("new-preset");
          let redSetting = document.getElementById("setting-red");
          let greenSetting = document.getElementById("setting-green");
          let blueSetting = document.getElementById("setting-blue");
          let effectSetting = document.getElementById("setting-effect");
          const newPreset = {
            preset: {
              name: presetName.value,
              red: parseInt(redSetting.value),
              green: parseInt(greenSetting.value),
              blue: parseInt(blueSetting.value),
              effect: effectSetting.value
            }
          };
          $.ajax({
            url: "/presets",
            type: "POST",
            dataType: "JSON",
            data: newPreset
          }).then((res) => {
            presetName.value = "";
            createNewPreset(res);
          });
        }}>Save</button>
    </div>
  );

export default Controls;
