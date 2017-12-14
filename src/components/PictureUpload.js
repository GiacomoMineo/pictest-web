import React, { Component } from 'react'
import { Button, Grid } from 'material-ui'
import Dropzone from 'react-dropzone'
import '../styles/build/pictureUpload.css'

class PictureUpload extends Component {
  constructor(props) {
    super(props)

    this.state = {
      picture: null
    }
  }

  handlePreviewPicture = (accepted, rejected) => {
    this.setState({
      picture: accepted[0]
    })
  }

  handleConfirmPicture = () => {
    this.props.handleConfirmPicture(this.state.picture)
  }

  render() {
    if (!this.props.hidden) {
      return (null)
    }

    return (
      <Grid container className="picture-upload">
        <Grid item xs={12}>
          <span>Picture upload</span>
          {this.state.picture ? (
            <div className="preview">
              <img
                src={this.state.picture ? this.state.picture.preview : null}
                alt="preview"
              />
            </div>
          ) : (
              <Dropzone
                accept="image/jpeg, image/png"
                multiple={false}
                onDrop={this.handlePreviewPicture}
                className="dropzone"
              >
                <p>Drag & Drop or click to upload</p>
                <p>Only *.jpeg and *.png images will be accepted</p>
              </Dropzone>
            )}

          <Button disabled={!this.state.picture} onClick={this.handleConfirmPicture}>Confirm</Button>
        </Grid>
      </Grid>
    )
  }
}

export default PictureUpload
