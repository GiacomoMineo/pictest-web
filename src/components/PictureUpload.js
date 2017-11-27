import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Dropzone from 'react-dropzone'
import '../styles/pictureUpload.css'

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

	handleConfirmPicture = () => {}

	render() {
		return (
			<Grid container className="picture-upload">
				<span>Picture panel</span>
				<Dropzone
					accept="image/jpeg, image/png"
					multiple={false}
					onDrop={this.handlePreviewPicture}
				>
					<p>Drag & Drop or click to upload</p>
					<p>Only *.jpeg and *.png images will be accepted</p>
				</Dropzone>
				<div>
					<img
						src={this.state.picture ? this.state.picture.preview : null}
						alt="preview"
					/>
				</div>
				<button onClick={this.handleConfirmPicture}>Confirm button</button>
			</Grid>
		)
	}
}

export default PictureUpload
