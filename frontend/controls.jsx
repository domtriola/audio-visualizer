import React from 'react';

class Controls extends React.Component {
  constructor(props) {
    super(props);
  }

  updateAudioVis() {
    console.log("bubble up state");
  }

  render() {
    return (
      <div onClick={this.updateAudioVis}>
        controls
      </div>
    );
  }
}

export default Controls;
