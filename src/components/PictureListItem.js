import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import Vote from './Vote'

class PictureListItem extends Component {
	constructor(props) {
		super(props)

		this.state = {
			votes: props.picture.votes
		}
	}

	onVote = pictureId => {
		this.setState(state => {
			return { votes: state.votes + 1 }
		})

		this.props.onVote(pictureId)
	}

	render() {
		return (
			<Grid item lg={4} xs={12}>
				{JSON.stringify(this.props.picture)}
				<div>
					<span>Votes: </span>
					<span>{this.state.votes}</span>
				</div>
				{!this.props.userVoted && (
					<Vote onVote={this.onVote} pictureId={this.props.picture.id} />
				)}
			</Grid>
		)
	}
}

export default PictureListItem
