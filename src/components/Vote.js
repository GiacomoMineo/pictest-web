import React, { Component } from 'react'

class VotePicture extends Component {
  handleVote = () => {
    this.props.onVote(this.props.pictureId)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleVote}>Vote!</button>
      </div>
    );
  }
}

export default VotePicture;