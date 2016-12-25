import { connect } from 'react-redux';
import { updateRed, updateGreen, updateBlue, reset } from '../actions';
import Controls from './controls.jsx';

const mapStateToProps = state => ({
  red: state.red,
  green: state.green,
  blue: state.blue,
  presets: state.presets
});

const mapDispatchToProps = dispatch => ({
  updateRed: (amt) => dispatch(updateRed(amt)),
  updateGreen: (amt) => dispatch(updateGreen(amt)),
  updateBlue: (amt) => dispatch(updateBlue(amt)),
  setCurrentPreset: (presetName) => dispatch(presetName),
  createNewPreset: (newPreset) => dispatch(newPreset),
  reset: () => dispatch(reset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);