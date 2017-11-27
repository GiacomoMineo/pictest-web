import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import PictureListItem from './PictureListItem'

class PictureList extends Component {
	render() {
		var pictures = this.props.pictures.map(picture => {
			return (
				<PictureListItem
					key={picture.id}
					picture={picture}
					userVoted={this.props.userVoted}
					onVote={this.props.onVote}
				/>
			)
		})

		return (
			<Grid item xs={12}>
				<Grid container>{pictures}</Grid>
			</Grid>
		)
	}
}

export default PictureList
