import React, { Component } from 'react'
import { Button, Grid } from 'material-ui'
import PictureUpload from './PictureUpload'
import '../styles/contestHeader.css'

class ContestHeader extends Component {
	constructor(props) {
		super(props)

		this.state = {
			showAddPicturePanel: false
		}
	}

	togglePicturePanel = () => {
		this.setState(state => {
			return { showAddPicturePanel: !state.showAddPicturePanel }
		})
	}

	render() {
		return (
			<Grid item xs={12} className="contest-header">
				<Grid container alignItems={'center'}>
					<Grid item xs={2}>
						{!this.state.showAddPicturePanel ? (
							<Button onClick={this.togglePicturePanel}>Add Picture</Button>
						) : (
							<Button onClick={this.togglePicturePanel}>
								Close Picture Panel
							</Button>
						)}
					</Grid>
					<Grid item xs={8} className="contest-header-main">
						<h2>Topic: {this.props.contest.topic}</h2>
						<div>Ends in: </div>
					</Grid>
					<Grid item xs={2}>
						<span>by: </span>
						<img alt="author" src="" />
					</Grid>
				</Grid>
				{this.state.showAddPicturePanel && (
					<PictureUpload contest={this.props.contest.id} />
				)}
			</Grid>
		)
	}
}

export default ContestHeader
