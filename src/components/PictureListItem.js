import React, { Component } from 'react'
import Vote from './Vote'

class PictureListItem extends Component {
  render() {
    return (
      <div>
        {JSON.stringify(this.props.picture)}
        <Vote />
      </div>
    );
  }
}

export default PictureListItem;