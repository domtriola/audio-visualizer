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
          let presetName = document.getElementById("new-preset");
          let redSetting = document.getElementById("setting-red");
          let greenSetting = document.getElementById("setting-green");
          let blueSetting = document.getElementById("setting-blue");
          const newPreset = {
            preset: {
              name: presetName.value,
              red: parseInt(redSetting.value),
              green: parseInt(greenSetting.value),
              blue: parseInt(blueSetting.value)
            }
          };
          $.ajax({
            url: "http://localhost:3000/presets",
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
