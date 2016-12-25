import { connect } from 'react-redux';
import { updateRed, updateGreen, updateBlue, reset } from '../actions';
import Visualizer from './visualizer.jsx';

const mapStateToProps = state => ({
  red: state.red,
  green: state.green,
  blue: state.blue
});

export default connect(
  mapStateToProps
)(Visualizer);
