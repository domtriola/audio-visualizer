import React from 'react';
import Controls from './controls';

class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // visualizer settings
    };
  }

  render() {
    return (
      <div>
        <Controls />
      </div>
    );
  }
}

export default Visualizer;
