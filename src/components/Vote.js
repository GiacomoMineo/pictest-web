import React, { Component } from 'react'
import { Button } from 'material-ui'

class VotePicture extends Component {
  handleVote = () => {
    this.props.onVote(this.props.pictureId)
  }

  render() {
    return (
      <div className="vote-button-wrapper">
        <Button raised color="primary" onClick={this.handleVote}>Vote!</Button>
      </div>
    );
  }
}

export default VotePicture