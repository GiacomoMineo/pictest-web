import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class AddPicture extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showAddPicturePanel: false,
			picture: null
		}
	}

	togglePicturePanel = () => {
		this.setState(state => {
			return { showAddPicturePanel: !state.showAddPicturePanel }
		})
	}

	handlePreviewPicture = (accepted, rejected) => {
		this.setState({
			picture: accepted[0]
		})
	}

	handleConfirmPicture = () => {
    
  }

	render() {
		return (
			<div>
				{!this.state.showAddPicturePanel && (
					<button onClick={this.togglePicturePanel}>Add Picture</button>
				)}
				{this.state.showAddPicturePanel && (
					<div>
						<span>Picture panel</span>
						<Dropzone
							accept="image/jpeg, image/png"
							multiple={false}
							onDrop={this.handlePreviewPicture}
						>
							<p>
								Try dropping some files here, or click to select files to
								upload.
							</p>
							<p>Only *.jpeg and *.png images will be accepted</p>
						</Dropzone>
						<div>
							<img
								src={this.state.picture ? this.state.picture.preview : null}
							/>
						</div>
						<button onClick={this.handleConfirmPicture}>Confirm button</button>
						<button onClick={this.togglePicturePanel}>
							Close Picture Panel
						</button>
					</div>
				)}
			</div>
		)
	}
}

export default AddPicture
