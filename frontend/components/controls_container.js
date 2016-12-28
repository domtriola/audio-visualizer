import { connect } from 'react-redux';
import { updateRed, updateGreen, updateBlue,
         createNewPreset, setCurrentPreset,
         setCurrentEffect, reset } from '../actions';
import Controls from './controls.jsx';

const mapStateToProps = state => ({
  red: state.red,
  green: state.green,
  blue: state.blue,
  effect: state.effect,
  presets: state.presets
});

const mapDispatchToProps = dispatch => ({
  updateRed: (amt) => dispatch(updateRed(amt)),
  updateGreen: (amt) => dispatch(updateGreen(amt)),
  updateBlue: (amt) => dispatch(updateBlue(amt)),
  setCurrentPreset: (presetName) => dispatch(setCurrentPreset(presetName)),
  createNewPreset: (newPreset) => dispatch(createNewPreset(newPreset)),
  setCurrentEffect: (effectName) => dispatch(setCurrentEffect(effectName)),
  reset: () => dispatch(reset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
